from html.parser import HTMLParser
from pathlib import Path
from collections import defaultdict
import json,hashlib,re
class Page(HTMLParser):
 def __init__(self):super().__init__();self.main=False;self.tag=None;self.buf=[];self.text=[];self.images=[]
 def handle_starttag(self,t,a):
  a=dict(a)
  if t=='main':self.main=True
  if not self.main:return
  if t=='img':self.images.append(a['src'].split('?')[0])
  if t in ['p','h1','h2','h3','li','summary']:self.tag=t;self.buf=[]
 def handle_data(self,d):
  if self.tag:self.buf.append(d)
 def handle_endtag(self,t):
  if t==self.tag:
   s=' '.join(' '.join(self.buf).split())
   if len(s)>60:self.text.append(s)
   for sentence in re.split(r'(?<=[.!?]) +',s):
    if len(sentence)>60 and sentence!=s:self.text.append(sentence)
   self.tag=None
  if t=='main':self.main=False
texts=defaultdict(list);images=defaultdict(list)
for f in Path('dist').rglob('index.html'):
 if 'logo-options' in str(f):continue
 p=Page();p.feed(f.read_text());route='/' if f.parent==Path('dist') else '/'+str(f.parent.relative_to('dist'))+'/'
 for s in p.text:texts[s].append(route)
 for s in p.images:images[s].append(route)
r={'scope':'Main content; excludes shared navigation, brand, form labels and short service names. Checks exact blocks and sentences over 60 characters; image content hashes catch renamed copies.', 'contentImageCount':sum(map(len,images.values())), 'text':{k:v for k,v in texts.items() if len(v)>1},'images':{k:v for k,v in images.items() if len(v)>1}}
hashes=defaultdict(list)
for source,routes in images.items():
 digest=hashlib.sha256(Path('dist'+source).read_bytes()).hexdigest()
 hashes[digest].extend(routes)
r['duplicateImageContents']={k:v for k,v in hashes.items() if len(v)>1}
Path('outputs/repetition-audit.json').write_text(json.dumps(r,indent=2));print(json.dumps(r,indent=2))

assert not r['text'] and not r['images'] and not r['duplicateImageContents'], 'Repeated page content found'
