;(function (root) {
    function Router(){
        var self = this;
        root.onhashchange = function () {
            self.do(root.location.hash);
        };
        self.router = [];
    };
    Router.prototype.add = function(name, data) {
        var isAdd = true;
        this.router.forEach(function(item){
            if(item.name === name){
                console.error(name + 'router name is exist');
            }
        });
        if(isAdd){
            var urlArr = data.url.split('/');
            if(urlArr[2]&&urlArr[2].indexOf(':')!==-1){
                var regStr = '^' + '#/'+ urlArr[1] + '/' + '((?!\/).)*';
            }else{
                var regStr ='^' + '#/' + urlArr[1] + "$";
            }
            var item = data;
            item.reg =  new RegExp(regStr);
            item.name = name;
            this.router.push(data);
        }
        return this;
    };
    Router.prototype.do = function(hash){
        var isHaveRouter = false;
        var isHaveDefaultRouter = false;
        var hashArr = hash.split('/');
        for(var i=0,length = this.router.length; i<length; i++){
            if(hash.match(this.router[i].reg)){
                isHaveRouter = true;
                this.router[i].ctrl(hashArr[2]?hashArr[2]:'');
                i = length;
            };
        }
        if(!isHaveRouter){
            for(var j=0,length2 = this.router.length; j<length2; j++){
                if(this.defaultRouter == this.router[j].name){
                    console.warn('change default router success');
                    root.location.hash = this.router[j].url;
                    return;
                }
                if(!isHaveDefaultRouter){
                    console.error('do not find default router')
                }
            }
        }
    };
    Router.prototype.default = function(name){
        this.defaultRouter = name;
        return this;
    };
    Router.prototype.complete = function(){
        this.do(root.location.hash);
    };
    return root.$router = Router;
})(window);
