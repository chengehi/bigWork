// 公共函数
		var $ = function(selectors,parentNode){
				var parentNode = parentNode?parentNode:document;
				return [].slice.call(parentNode.querySelectorAll(selectors));
			}
 
		var addClass = function(node, className){
		    var current = node.className || "";
		    if ((" " + current + " ").indexOf(" " + className + " ") === -1) {
		      node.className = current? ( current + " " + className ) : className;
		    }
		  }

		var html2node = function(str){
			var container = document.createElement('div');
			container.innerHTML = str;
			return container.children[0];
		} 

		var CookieUtil = {

		    get: function (name){
		        var cookieName = encodeURIComponent(name) + "=",
		            cookieStart = document.cookie.indexOf(cookieName),
		            cookieValue = null;

		        if (cookieStart > -1){
		            var cookieEnd = document.cookie.indexOf(";", cookieStart);
		            if (cookieEnd == -1){
		                cookieEnd = document.cookie.length;
		            }
		            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart
		                          + cookieName.length, cookieEnd));
		         }

		        return cookieValue;
		    },

		    set: function (name, value, expires, path, domain, secure) {
		        var cookieText = encodeURIComponent(name) + "=" +
		                         encodeURIComponent(value);

		        if (expires instanceof Date) {
		            cookieText += "; expires=" + expires.toGMTString();
		        }

		        if (path) {
		            cookieText += "; path=" + path;
		        }  

		        if (domain) {
		            cookieText += "; domain=" + domain;
		        }

		        if (secure) {
		            cookieText += "; secure";
		        }

		        document.cookie = cookieText;
		    },

		    unset: function (name, path, domain, secure){
		        this.set(name, "", new Date(0), path, domain, secure);
		    }

		};

		function get(url,options,callback){
		    var xhr =window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
		    xhr.onreadystatechange = function(){
		        if(xhr.readyState==4){
		            if(xhr.status >=200 && xhr.status <300 ||xhr.status ==304){
		                callback(xhr.responseText);
		            }else{
		                alert("Request was unsussessful" + xhr.status);
		            }
		        }
		    }
		    xhr.open('get',url+'?'+serialize(options),true);
		    xhr.send(null);

		}

		//对象序列化函数
		function serialize(data){
		    if (!data) {
		        return '';
		    }
		    var pairs = [];
		    for (var name in data) {
		        if (!data.hasOwnProperty(name)) {
		            continue;
		        }
		        if (typeof data[name] === 'function') {
		            continue;
		        }
		        var value = data[name].toString();
		        name = encodeURIComponent(name);
		        value = encodeURIComponent(value);
		        pairs.push(name + '=' + value);
		    }
		    return pairs.join('&');
		}

		function extend(o1, o2){
		    for(var i in o2) if(typeof o1[i] === 'undefined'){
		      o1[i] = o2[i]
		    } 
		    return o1
		}




