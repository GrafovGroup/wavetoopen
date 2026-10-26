from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
root=Path('dist'); errors=[]
class P(HTMLParser):
 def __init__(self):super().__init__();self.ids=[];self.refs=[];self.h1=0
 def handle_starttag(self,t,a):
  d=dict(a)
  if 'id' in d:self.ids.append(d['id'])
  if t=='h1':self.h1+=1
  if t=='img' and 'alt' not in d:errors.append('missing alt')
  for k in ['href','src']:
   if d.get(k):self.refs.append(d[k])
pages={}
for f in root.rglob('*.html'):
 p=P();p.feed(f.read_text());pages[f]=p
 if p.h1!=1:errors.append(str(f)+' h1 '+str(p.h1))
 if len(p.ids)!=len(set(p.ids)):errors.append(str(f)+' duplicate ids')
for f,p in pages.items():
 for ref in p.refs:
  u=urlsplit(ref)
  if u.scheme or u.netloc:continue
  dest=root/unquote(u.path).lstrip('/') if u.path.startswith('/') else f.parent/unquote(u.path)
  if not u.path:dest=f
  elif dest.is_dir():dest=dest/'index.html'
  if not dest.exists():errors.append(str(f)+' missing '+ref)
  elif u.fragment and dest in pages and unquote(u.fragment) not in pages[dest].ids:errors.append(str(f)+' bad anchor '+ref)
print(f'{len(pages)} HTML documents checked; {len(errors)} errors');print('\n'.join(errors[:20]));assert not errors
