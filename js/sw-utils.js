

function actualizarCacheDinamico(dynamicCache, req, res){

    if(res.ok){
        return caches.open(dynamicCache).then(cache=>{
            cache.put(req, res.clone());
            return res.clone();
        });//cierre thn
    }//cierre id
    else{
        return res;

    }
}//cirre funcion