mem1 = {
    mem: function(){
        let cache = '';

        return (passedInTerm)=>{
            if(passedInTerm != undefined  && passedInTerm != cache) {
                return cache += passedInTerm;
            }else{
                return cache
            }
        }
    }.call()
}