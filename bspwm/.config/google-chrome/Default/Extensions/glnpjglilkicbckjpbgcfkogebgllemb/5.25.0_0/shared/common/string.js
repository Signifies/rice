var StringUtil=function(){return{format:function(n,t){return n.replace(/\{(\d+)\}/g,function(n,r){return typeof t[r]!="undefined"?t[r]:n})},hashCode:function(n){if(typeof n!="string")return"not string";var r=0;if(n.length===0)return r;for(i=0;i<n.length;i++){r=(r<<5)-r+n.charCodeAt(i);r=r&r}return r}}}();