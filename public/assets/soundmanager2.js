/** @license

 SoundManager 2: JavaScript Sound for the Web
 ----------------------------------------------
 http://schillmania.com/projects/soundmanager2/

 Copyright (c) 2007, Scott Schiller. All rights reserved.
 Code provided under the BSD License:
 http://schillmania.com/projects/soundmanager2/license.txt

 V2.97a.20110424
*/
(function(e){function t(t,n){function r(e){return function(t){return!this._t||!this._t._a?null:e.call(this,t)}}function i(){o.debugURLParam.test(l)&&(o.debugMode=!0)}this.flashVersion=8,this.debugFlash=this.debugMode=!1,this.useConsole=!0,this.waitForWindowLoad=this.consoleOnly=!1,this.nullURL="about:blank",this.allowPolling=!0,this.useFastPolling=!1,this.useMovieStar=!0,this.bgColor="#ffffff",this.useHighPerformance=!1,this.flashPollingInterval=null,this.flashLoadTimeout=1e3,this.wmode=null,this.allowScriptAccess="always",this.useHTML5Audio=this.useFlashBlock=!1,this.html5Test=/^probably$/i,this.useGlobalHTML5Audio=!0,this.requireFlash=!1,this.audioFormats={mp3:{type:['audio/mpeg; codecs="mp3"',"audio/mpeg","audio/mp3","audio/MPA","audio/mpa-robust"],required:!0},mp4:{related:["aac","m4a"],type:['audio/mp4; codecs="mp4a.40.2"',"audio/aac","audio/x-m4a","audio/MP4A-LATM","audio/mpeg4-generic"],required:!0},ogg:{type:["audio/ogg; codecs=vorbis"],required:!1},wav:{type:['audio/wav; codecs="1"',"audio/wav","audio/wave","audio/x-wav"],required:!1}},this.defaultOptions={autoLoad:!1,stream:!0,autoPlay:!1,loops:1,onid3:null,onload:null,whileloading:null,onplay:null,onpause:null,onresume:null,whileplaying:null,onstop:null,onfailure:null,onfinish:null,onbeforefinish:null,onbeforefinishtime:5e3,onbeforefinishcomplete:null,onjustbeforefinish:null,onjustbeforefinishtime:200,multiShot:!0,multiShotEvents:!1,position:null,pan:0,type:null,usePolicyFile:!1,volume:100},this.flash9Options={isMovieStar:null,usePeakData:!1,useWaveformData:!1,useEQData:!1,onbufferchange:null,ondataerror:null},this.movieStarOptions={bufferTime:3,serverURL:null,onconnect:null,duration:null},this.version=null,this.versionNumber="V2.97a.20110424",this.movieURL=null,this.url=t||null,this.altURL=null,this.enabled=this.swfLoaded=!1,this.o=null,this.movieID="sm2-container",this.id=n||"sm2movie",this.swfCSS={swfBox:"sm2-object-box",swfDefault:"movieContainer",swfError:"swf_error",swfTimedout:"swf_timedout",swfLoaded:"swf_loaded",swfUnblocked:"swf_unblocked",sm2Debug:"sm2_debug",highPerf:"high_performance",flashDebug:"flash_debug"},this.oMC=null,this.sounds={},this.soundIDs=[],this.muted=!1,this.debugID="soundmanager-debug",this.debugURLParam=/([#?&])debug=1/i,this.didFlashBlock=this.specialWmodeCase=!1,this.filePattern=null,this.filePatterns={flash8:/\.mp3(\?.*)?$/i,flash9:/\.mp3(\?.*)?$/i},this.baseMimeTypes=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i,this.netStreamMimeTypes=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i,this.netStreamTypes=["aac","flv","mov","mp4","m4v","f4v","m4a","mp4v","3gp","3g2"],this.netStreamPattern=RegExp("\\.("+this.netStreamTypes.join("|")+")(\\?.*)?$","i"),this.mimePattern=this.baseMimeTypes,this.features={buffering:!1,peakData:!1,waveformData:!1,eqData:!1,movieStar:!1},this.sandbox={},this.hasHTML5=null,this.html5={usingFlash:null},this.ignoreFlash=!1;var s,o=this,u,a=navigator.userAgent,f=e,l=f.location.href.toString(),c=this.flashVersion,h=document,p,d,v=[],m=!1,g=!1,y=!1,b=!1,w=!1,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q,R,U=null,z=null,W,X,V,$,J,K,Q,G=!1,Z=!1,et,tt,nt=null,rt,it,st=!1,ot,ut,at,ft,lt,ct=Array.prototype.slice,ht=!1,pt,dt,vt,mt=a.match(/pre\//i),gt=a.match(/(ipad|iphone|ipod)/i);a.match(/mobile/i);var yt=a.match(/msie/i),bt=a.match(/webkit/i),wt=a.match(/safari/i)&&!a.match(/chrome/i),Et=a.match(/opera/i),St=!l.match(/usehtml5audio/i)&&!l.match(/sm2\-ignorebadua/i)&&wt&&a.match(/OS X 10_6_([3-9])/i),xt=typeof h.hasFocus!="undefined"?h.hasFocus():null,Tt=typeof h.hasFocus=="undefined"&&wt,Nt=!Tt;this._use_maybe=l.match(/sm2\-useHTML5Maybe\=1/i),this._overHTTP=h.location?h.location.protocol.match(/http/i):null,this._http=this._overHTTP?"":"http:",this.useAltURL=!this._overHTTP,this._global_a=null;if(gt||mt)o.useHTML5Audio=!0,o.ignoreFlash=!0,o.useGlobalHTML5Audio&&(ht=!0);if(mt||this._use_maybe)o.html5Test=/^(probably|maybe)$/i;this.supported=this.ok=function(){return nt?y&&!b:o.useHTML5Audio&&o.hasHTML5},this.getMovie=function(e){return yt?f[e]:wt?u(e)||h[e]:u(e)},this.createSound=function(e){function t(){return n=$(n),o.sounds[i.id]=new s(i),o.soundIDs.push(i.id),o.sounds[i.id]}var n=null,r=null,i=null;if(!y||!o.ok())return K("soundManager.createSound(): "+W(y?"notOK":"notReady")),!1;arguments.length===2&&(e={id:arguments[0],url:arguments[1]}),i=n=S(e);if(Q(i.id,!0))return o.sounds[i.id];if(it(i))r=t(),r._setup_html5(i);else{c>8&&o.useMovieStar&&(i.isMovieStar===null&&(i.isMovieStar=i.serverURL||i.type&&i.type.match(o.netStreamPattern)||i.url.match(o.netStreamPattern)?!0:!1),i.isMovieStar&&i.usePeakData&&(i.usePeakData=!1)),i=J(i,"soundManager.createSound(): "),r=t();if(c===8)o.o._createSound(i.id,i.onjustbeforefinishtime,i.loops||1,i.usePolicyFile);else if(o.o._createSound(i.id,i.url,i.onjustbeforefinishtime,i.usePeakData,i.useWaveformData,i.useEQData,i.isMovieStar,i.isMovieStar?i.bufferTime:!1,i.loops||1,i.serverURL,i.duration||null,i.autoPlay,!0,i.autoLoad,i.usePolicyFile),!i.serverURL)r.connected=!0,i.onconnect&&i.onconnect.apply(r);(i.autoLoad||i.autoPlay)&&!i.serverURL&&r.load(i)}return i.autoPlay&&!i.serverURL&&r.play(),r},this.destroySound=function(e,t){if(!Q(e))return!1;var n=o.sounds[e],r;n._iO={},n.stop(),n.unload();for(r=0;r<o.soundIDs.length;r++)if(o.soundIDs[r]===e){o.soundIDs.splice(r,1);break}return t||n.destruct(!0),delete o.sounds[e],!0},this.load=function(e,t){return Q(e)?o.sounds[e].load(t):!1},this.unload=function(e){return Q(e)?o.sounds[e].unload():!1},this.start=this.play=function(e,t){return!y||!o.ok()?(K("soundManager.play(): "+W(y?"notOK":"notReady")),!1):Q(e)?o.sounds[e].play(t):(t instanceof Object||(t={url:t}),t&&t.url?(t.id=e,o.createSound(t).play()):!1)},this.setPosition=function(e,t){return Q(e)?o.sounds[e].setPosition(t):!1},this.stop=function(e){return Q(e)?o.sounds[e].stop():!1},this.stopAll=function(){for(var e in o.sounds)o.sounds[e]instanceof s&&o.sounds[e].stop()},this.pause=function(e){return Q(e)?o.sounds[e].pause():!1},this.pauseAll=function(){for(var e=o.soundIDs.length;e--;)o.sounds[o.soundIDs[e]].pause()},this.resume=function(e){return Q(e)?o.sounds[e].resume():!1},this.resumeAll=function(){for(var e=o.soundIDs.length;e--;)o.sounds[o.soundIDs[e]].resume()},this.togglePause=function(e){return Q(e)?o.sounds[e].togglePause():!1},this.setPan=function(e,t){return Q(e)?o.sounds[e].setPan(t):!1},this.setVolume=function(e,t){return Q(e)?o.sounds[e].setVolume(t):!1},this.mute=function(e){var t=0;typeof e!="string"&&(e=null);if(e)return Q(e)?o.sounds[e].mute():!1;for(t=o.soundIDs.length;t--;)o.sounds[o.soundIDs[t]].mute();return o.muted=!0,!0},this.muteAll=function(){o.mute()},this.unmute=function(e){typeof e!="string"&&(e=null);if(e)return Q(e)?o.sounds[e].unmute():!1;for(e=o.soundIDs.length;e--;)o.sounds[o.soundIDs[e]].unmute();return o.muted=!1,!0},this.unmuteAll=function(){o.unmute()},this.toggleMute=function(e){return Q(e)?o.sounds[e].toggleMute():!1},this.getMemoryUse=function(){if(c===8)return 0;if(o.o)return parseInt(o.o._getMemoryUse(),10)},this.disable=function(e){typeof e=="undefined"&&(e=!1);if(b)return!1;b=!0;for(var t=o.soundIDs.length;t--;)I(o.sounds[o.soundIDs[t]]);return E(e),lt.remove(f,"load",N),!0},this.canPlayMIME=function(e){var t;return o.hasHTML5&&(t=ot({type:e})),!nt||t?t:e?e.match(o.mimePattern)?!0:!1:null},this.canPlayURL=function(e){var t;return o.hasHTML5&&(t=ot(e)),!nt||t?t:e?e.match(o.filePattern)?!0:!1:null},this.canPlayLink=function(e){return typeof e.type!="undefined"&&e.type&&o.canPlayMIME(e.type)?!0:o.canPlayURL(e.href)},this.getSoundById=function(e){if(!e)throw Error("soundManager.getSoundById(): sID is null/undefined");return o.sounds[e]},this.onready=function(e,t){if(e&&e instanceof Function)return t||(t=f),x("onready",e,t),T(),!0;throw W("needFunction","onready")},this.ontimeout=function(e,t){if(e&&e instanceof Function)return t||(t=f),x("ontimeout",e,t),T({type:"ontimeout"}),!0;throw W("needFunction","ontimeout")},this.getMoviePercent=function(){return o.o&&typeof o.o.PercentLoaded!="undefined"?o.o.PercentLoaded():null},this._wD=this._writeDebug=function(){return!0},this._debug=function(){},this.reboot=function(){var e,t;for(e=o.soundIDs.length;e--;)o.sounds[o.soundIDs[e]].destruct();try{yt&&(z=o.o.innerHTML),U=o.o.parentNode.removeChild(o.o)}catch(n){}z=U=null,o.enabled=y=G=Z=m=g=b=o.swfLoaded=!1,o.soundIDs=o.sounds=[],o.o=null;for(e in v)if(v.hasOwnProperty(e))for(t=v[e].length;t--;)v[e][t].fired=!1;f.setTimeout(function(){o.beginDelayedInit()},20)},this.destruct=function(){o.disable(!0)},this.beginDelayedInit=function(){w=!0,D(),setTimeout(M,20),k()},this._html5_events={abort:r(function(){}),canplay:r(function(){this._t._onbufferchange(0);var e=isNaN(this._t.position)?null:this._t.position/1e3;this._t._html5_canplay=!0;if(this._t.position&&this.currentTime!==e)try{this.currentTime=e}catch(t){}}),load:r(function(){this._t.loaded||(this._t._onbufferchange(0),this._t._whileloading(this._t.bytesTotal,this._t.bytesTotal,this._t._get_html5_duration()),this._t._onload(!0))}),emptied:r(function(){}),ended:r(function(){this._t._onfinish()}),error:r(function(){this._t._onload(!1)}),loadeddata:r(function(){}),loadedmetadata:r(function(){}),loadstart:r(function(){this._t._onbufferchange(1)}),play:r(function(){this._t._onbufferchange(0)}),playing:r(function(){this._t._onbufferchange(0)}),progress:r(function(e){if(this._t.loaded)return!1;var t,n=0,r=e.type==="progress",i=e.target.buffered;t=e.loaded||0;var s=e.total||1;if(i&&i.length){for(t=i.length;t--;)n=i.end(t)-i.start(t);t=n/e.target.duration,r&&isNaN(t)}isNaN(t)||(this._t._onbufferchange(0),this._t._whileloading(t,s,this._t._get_html5_duration()),t&&s&&t===s&&o._html5_events.load.call(this,e))}),ratechange:r(function(){}),suspend:r(function(e){o._html5_events.progress.call(this,e)}),stalled:r(function(){}),timeupdate:r(function(){this._t._onTimer()}),waiting:r(function(){this._t._onbufferchange(1)})},s=function(e){var t=this,n,r,i;this.sID=e.id,this.url=e.url,this._iO=this.instanceOptions=this.options=S(e),this.pan=this.options.pan,this.volume=this.options.volume,this._lastURL=null,this.isHTML5=!1,this._a=null,this.id3={},this._debug=function(){},this._debug(),this.load=function(e){var n=null;if(typeof e!="undefined")t._iO=S(e,t.options),t.instanceOptions=t._iO;else if(e=t.options,t._iO=e,t.instanceOptions=t._iO,t._lastURL&&t._lastURL!==t.url)t._iO.url=t.url,t.url=null;t._iO.url||(t._iO.url=t.url);if(t._iO.url===t.url&&t.readyState!==0&&t.readyState!==2)return t;t._lastURL=t.url,t.loaded=!1,t.readyState=1,t.playState=0;if(it(t._iO)){if(n=t._setup_html5(t._iO),!n._called_load)n.load(),n._called_load=!0,t._iO.autoPlay&&t.play()}else try{t.isHTML5=!1,t._iO=J($(t._iO)),c===8?o.o._load(t.sID,t._iO.url,t._iO.stream,t._iO.autoPlay,t._iO.whileloading?1:0,t._iO.loops||1,t._iO.usePolicyFile):o.o._load(t.sID,t._iO.url,t._iO.stream?!0:!1,t._iO.autoPlay?!0:!1,t._iO.loops||1,t._iO.autoLoad?!0:!1,t._iO.usePolicyFile)}catch(r){j()}return t},this.unload=function(){if(t.readyState!==0){if(t.isHTML5){if(r(),t._a)t._a.pause(),t._a.src=""}else c===8?o.o._unload(t.sID,o.nullURL):o.o._unload(t.sID);n()}return t},this.destruct=function(e){if(t.isHTML5){if(r(),t._a)t._a.pause(),t._a.src="",ht||t._remove_html5_events()}else t._iO.onfailure=null,o.o._destroySound(t.sID);e||o.destroySound(t.sID,!0)},this.start=this.play=function(e,n){var r,n=n===void 0?!0:n;e||(e={}),t._iO=S(e,t._iO),t._iO=S(t._iO,t.options),t.instanceOptions=t._iO;if(t._iO.serverURL&&!t.connected)return t.getAutoPlay()||t.setAutoPlay(!0),t;it(t._iO)&&(t._setup_html5(t._iO),i());if(t.playState===1&&!t.paused){if(!(r=t._iO.multiShot))return t;t.isHTML5&&t.setPosition(t._iO.position)}if(!t.loaded)if(t.readyState===0)t.isHTML5||(t._iO.autoPlay=!0),t.load(t._iO);else if(t.readyState===2)return t;return t.paused&&t.position&&t.position>0?t.resume():(t.playState=1,t.paused=!1,(!t.instanceCount||t._iO.multiShotEvents||c>8&&!t.isHTML5&&!t.getAutoPlay())&&t.instanceCount++,t.position=typeof t._iO.position!="undefined"&&!isNaN(t._iO.position)?t._iO.position:0,t.isHTML5||(t._iO=J($(t._iO))),t._iO.onplay&&n&&(t._iO.onplay.apply(t),t._onplay_called=!0),t.setVolume(t._iO.volume,!0),t.setPan(t._iO.pan,!0),t.isHTML5?(i(),t._setup_html5().play()):o.o._start(t.sID,t._iO.loops||1,c===9?t.position:t.position/1e3)),t},this.stop=function(e){return t.playState===1&&(t._onbufferchange(0),t.resetOnPosition(0),t.isHTML5||(t.playState=0),t.paused=!1,t._iO.onstop&&t._iO.onstop.apply(t),t.isHTML5?t._a&&(t.setPosition(0),t._a.pause(),t.playState=0,t._onTimer(),r(),t.unload()):(o.o._stop(t.sID,e),t._iO.serverURL&&t.unload()),t.instanceCount=0,t._iO={}),t},this.setAutoPlay=function(e){t._iO.autoPlay=e,t.isHTML5?t._a&&e&&t.play():o.o._setAutoPlay(t.sID,e),e&&!t.instanceCount&&t.readyState===1&&t.instanceCount++},this.getAutoPlay=function(){return t._iO.autoPlay},this.setPosition=function(e){e===void 0&&(e=0);var n=t.isHTML5?Math.max(e,0):Math.min(t.duration||t._iO.duration,Math.max(e,0));t.position=n,e=t.position/1e3,t.resetOnPosition(t.position),t._iO.position=n;if(t.isHTML5){if(t._a&&t._html5_canplay&&t._a.currentTime!==e)try{t._a.currentTime=e}catch(r){}}else e=c===9?t.position:e,t.readyState&&t.readyState!==2&&o.o._setPosition(t.sID,e,t.paused||!t.playState);return t.isHTML5&&t.paused&&t._onTimer(!0),t},this.pause=function(e){return t.paused||t.playState===0&&t.readyState!==1?t:(t.paused=!0,t.isHTML5?(t._setup_html5().pause(),r()):(e||e===void 0)&&o.o._pause(t.sID),t._iO.onpause&&t._iO.onpause.apply(t),t)},this.resume=function(){return t.paused?(t.paused=!1,t.playState=1,t.isHTML5?(t._setup_html5().play(),i()):(t._iO.isMovieStar&&t.setPosition(t.position),o.o._pause(t.sID)),!t._onplay_called&&t._iO.onplay?(t._iO.onplay.apply(t),t._onplay_called=!0):t._iO.onresume&&t._iO.onresume.apply(t),t):t},this.togglePause=function(){return t.playState===0?(t.play({position:c===9&&!t.isHTML5?t.position:t.position/1e3}),t):(t.paused?t.resume():t.pause(),t)},this.setPan=function(e,n){return typeof e=="undefined"&&(e=0),typeof n=="undefined"&&(n=!1),t.isHTML5||o.o._setPan(t.sID,e),t._iO.pan=e,n||(t.pan=e,t.options.pan=e),t},this.setVolume=function(e,n){return typeof e=="undefined"&&(e=100),typeof n=="undefined"&&(n=!1),t.isHTML5?t._a&&(t._a.volume=Math.max(0,Math.min(1,e/100))):o.o._setVolume(t.sID,o.muted&&!t.muted||t.muted?0:e),t._iO.volume=e,n||(t.volume=e,t.options.volume=e),t},this.mute=function(){return t.muted=!0,t.isHTML5?t._a&&(t._a.muted=!0):o.o._setVolume(t.sID,0),t},this.unmute=function(){t.muted=!1;var e=typeof t._iO.volume!="undefined";return t.isHTML5?t._a&&(t._a.muted=!1):o.o._setVolume(t.sID,e?t._iO.volume:t.options.volume),t},this.toggleMute=function(){return t.muted?t.unmute():t.mute()},this.onposition=function(e,n,r){return t._onPositionItems.push({position:e,method:n,scope:typeof r!="undefined"?r:t,fired:!1}),t},this.processOnPosition=function(){var e,n;e=t._onPositionItems.length;if(!e||!t.playState||t._onPositionFired>=e)return!1;for(;e--;)if(n=t._onPositionItems[e],!n.fired&&t.position>=n.position)n.method.apply(n.scope,[n.position]),n.fired=!0,o._onPositionFired++;return!0},this.resetOnPosition=function(e){var n,r;n=t._onPositionItems.length;if(!n)return!1;for(;n--;)if(r=t._onPositionItems[n],r.fired&&e<=r.position)r.fired=!1,o._onPositionFired--;return!0},this._onTimer=function(e){var n={};if(t._hasTimer||e)return t._a&&(e||(t.playState>0||t.readyState===1)&&!t.paused)?(t.duration=t._get_html5_duration(),t.durationEstimate=t.duration,e=t._a.currentTime?t._a.currentTime*1e3:0,t._whileplaying(e,n,n,n,n),!0):!1},this._get_html5_duration=function(){var e=t._a?t._a.duration*1e3:t._iO?t._iO.duration:void 0;return e&&!isNaN(e)&&e!==Infinity?e:t._iO?t._iO.duration:null},i=function(){t.isHTML5&&et(t)},r=function(){t.isHTML5&&tt(t)},n=function(){t._onPositionItems=[],t._onPositionFired=0,t._hasTimer=null,t._onplay_called=!1,t._a=null,t._html5_canplay=!1,t.bytesLoaded=null,t.bytesTotal=null,t.position=null,t.duration=t._iO&&t._iO.duration?t._iO.duration:null,t.durationEstimate=null,t.failures=0,t.loaded=!1,t.playState=0,t.paused=!1,t.readyState=0,t.muted=!1,t.didBeforeFinish=!1,t.didJustBeforeFinish=!1,t.isBuffering=!1,t.instanceOptions={},t.instanceCount=0,t.peakData={left:0,right:0},t.waveformData={left:[],right:[]},t.eqData=[],t.eqData.left=[],t.eqData.right=[]},n(),this._setup_html5=function(e){var e=S(t._iO,e),r=ht?o._global_a:t._a;decodeURI(e.url);var i=r&&r._t?r._t.instanceOptions:null;if(r){if(r._t&&i.url===e.url&&(!t._lastURL||t._lastURL===i.url))return r;ht&&r._t&&r._t.playState&&e.url!==i.url&&r._t.stop(),n(),r.src=e.url,t.url=e.url,t._lastURL=e.url,r._called_load=!1}else if(r=new Audio(e.url),r._called_load=!1,ht)o._global_a=r;return t.isHTML5=!0,t._a=r,r._t=t,t._add_html5_events(),r.loop=e.loops>1?"loop":"",e.autoLoad||e.autoPlay?(r.autobuffer="auto",r.preload="auto",t.load(),r._called_load=!0):(r.autobuffer=!1,r.preload="none"),r.loop=e.loops>1?"loop":"",r},this._add_html5_events=function(){if(t._a._added_events)return!1;var e;t._a._added_events=!0;for(e in o._html5_events)o._html5_events.hasOwnProperty(e)&&t._a&&t._a.addEventListener(e,o._html5_events[e],!1);return!0},this._remove_html5_events=function(){t._a._added_events=!1;for(var e in o._html5_events)o._html5_events.hasOwnProperty(e)&&t._a&&t._a.removeEventListener(e,o._html5_events[e],!1)},this._whileloading=function(e,n,r,i){t.bytesLoaded=e,t.bytesTotal=n,t.duration=Math.floor(r),t.bufferLength=i;if(t._iO.isMovieStar)t.durationEstimate=t.duration;else if(t.durationEstimate=t._iO.duration?t.duration>t._iO.duration?t.duration:t._iO.duration:parseInt(t.bytesTotal/t.bytesLoaded*t.duration,10),t.durationEstimate===void 0)t.durationEstimate=t.duration;t.readyState!==3&&t._iO.whileloading&&t._iO.whileloading.apply(t)},this._onid3=function(e,n){var r=[],i,s;i=0;for(s=e.length;i<s;i++)r[e[i]]=n[i];t.id3=S(t.id3,r),t._iO.onid3&&t._iO.onid3.apply(t)},this._whileplaying=function(e,n,r,i,s){return isNaN(e)||e===null?!1:(t.playState===0&&e>0&&(e=0),t.position=e,t.processOnPosition(),c>8&&!t.isHTML5&&(t._iO.usePeakData&&typeof n!="undefined"&&n&&(t.peakData={left:n.leftPeak,right:n.rightPeak}),t._iO.useWaveformData&&typeof r!="undefined"&&r&&(t.waveformData={left:r.split(","),right:i.split(",")}),t._iO.useEQData&&typeof s!="undefined"&&s&&s.leftEQ&&(e=s.leftEQ.split(","),t.eqData=e,t.eqData.left=e,typeof s.rightEQ!="undefined"&&s.rightEQ)&&(t.eqData.right=s.rightEQ.split(","))),t.playState===1&&(!t.isHTML5&&o.flashVersion===8&&!t.position&&t.isBuffering&&t._onbufferchange(0),t._iO.whileplaying&&t._iO.whileplaying.apply(t),(t.loaded||!t.loaded&&t._iO.isMovieStar)&&t._iO.onbeforefinish&&t._iO.onbeforefinishtime&&!t.didBeforeFinish&&t.duration-t.position<=t._iO.onbeforefinishtime&&t._onbeforefinish()),!0)},this._onconnect=function(e){e=e===1;if(t.connected=e)t.failures=0,Q(t.sID)&&(t.getAutoPlay()?t.play(void 0,t.getAutoPlay()):t._iO.autoLoad&&t.load()),t._iO.onconnect&&t._iO.onconnect.apply(t,[e])},this._onload=function(e){return e=e?!0:!1,t.loaded=e,t.readyState=e?3:2,t._onbufferchange(0),t._iO.onload&&t._iO.onload.apply(t,[e]),!0},this._onfailure=function(e,n,r){t.failures++,t._iO.onfailure&&t.failures===1&&t._iO.onfailure(t,e,n,r)},this._onbeforefinish=function(){t.didBeforeFinish||(t.didBeforeFinish=!0,t._iO.onbeforefinish&&t._iO.onbeforefinish.apply(t))},this._onjustbeforefinish=function(){t.didJustBeforeFinish||(t.didJustBeforeFinish=!0,t._iO.onjustbeforefinish&&t._iO.onjustbeforefinish.apply(t))},this._onfinish=function(){var e=t._iO.onfinish;t._onbufferchange(0),t.resetOnPosition(0),t._iO.onbeforefinishcomplete&&t._iO.onbeforefinishcomplete.apply(t),t.didBeforeFinish=!1,t.didJustBeforeFinish=!1,t.instanceCount&&(t.instanceCount--,t.instanceCount||(t.playState=0,t.paused=!1,t.instanceCount=0,t.instanceOptions={},t._iO={},r()),(!t.instanceCount||t._iO.multiShotEvents)&&e&&e.apply(t))},this._onbufferchange=function(e){return t.playState===0?!1:e&&t.isBuffering||!e&&!t.isBuffering?!1:(t.isBuffering=e===1,t._iO.onbufferchange&&t._iO.onbufferchange.apply(t),!0)},this._ondataerror=function(){t.playState>0&&t._iO.ondataerror&&t._iO.ondataerror.apply(t)}},H=function(){return h.body?h.body:h._docElement?h.documentElement:h.getElementsByTagName("div")[0]},u=function(e){return h.getElementById(e)},S=function(e,t){var n={},r,i;for(r in e)e.hasOwnProperty(r)&&(n[r]=e[r]);r=typeof t=="undefined"?o.defaultOptions:t;for(i in r)r.hasOwnProperty(i)&&typeof n[i]=="undefined"&&(n[i]=r[i]);return n},lt=function(){function e(e){var e=ct.call(e),t=e.length;return n?(e[1]="on"+e[1],t>3&&e.pop()):t===3&&e.push(!1),e}function t(e,t){var i=e.shift(),s=[r[t]];n?i[s](e[0],e[1]):i[s].apply(i,e)}var n=f.attachEvent,r={add:n?"attachEvent":"addEventListener",remove:n?"detachEvent":"removeEventListener"};return{add:function(){t(e(arguments),"add")},remove:function(){t(e(arguments),"remove")}}}(),it=function(e){return!e.serverURL&&(e.type?ot({type:e.type}):ot(e.url)||st)},ot=function(e){if(!o.useHTML5Audio||!o.hasHTML5)return!1;var t,n=o.audioFormats;if(!ut){ut=[];for(t in n)n.hasOwnProperty(t)&&(ut.push(t),n[t].related&&(ut=ut.concat(n[t].related)));ut=RegExp("\\.("+ut.join("|")+")","i")}t=typeof e.type!="undefined"?e.type:null,e=typeof e=="string"?e.toLowerCase().match(ut):null;if(!e||!e.length){if(!t)return!1;e=t.indexOf(";"),e=(e!==-1?t.substr(0,e):t).substr(6)}else e=e[0].substr(1);if(e&&typeof o.html5[e]!="undefined")return o.html5[e];if(!t){if(e&&o.html5[e])return o.html5[e];t="audio/"+e}return t=o.html5.canPlayType(t),o.html5[e]=t},ft=function(){function e(e){var n,r,i=!1;if(!t||typeof t.canPlayType!="function")return!1;if(e instanceof Array){n=0;for(r=e.length;n<r&&!i;n++)if(o.html5[e[n]]||t.canPlayType(e[n]).match(o.html5Test))i=!0,o.html5[e[n]]=!0;return i}return(e=t&&typeof t.canPlayType=="function"?t.canPlayType(e):!1)&&(e.match(o.html5Test)?!0:!1)}if(!o.useHTML5Audio||typeof Audio=="undefined")return!1;var t=typeof Audio!="undefined"?Et?new Audio(null):new Audio:null,n,r={},i,s;dt(),i=o.audioFormats;for(n in i)if(i.hasOwnProperty(n)&&(r[n]=e(i[n].type),i[n]&&i[n].related))for(s=i[n].related.length;s--;)o.html5[i[n].related[s]]=r[n];return r.canPlayType=t?e:null,o.html5=S(o.html5,r),!0},W=function(){},$=function(e){return c===8&&e.loops>1&&e.stream&&(e.stream=!1),e},J=function(e){return e&&!e.usePolicyFile&&(e.onid3||e.usePeakData||e.useWaveformData||e.useEQData)&&(e.usePolicyFile=!0),e},K=function(e){typeof console!="undefined"&&typeof console.warn!="undefined"&&console.warn(e)},p=function(){return!1},I=function(e){for(var t in e)e.hasOwnProperty(t)&&typeof e[t]=="function"&&(e[t]=p)},q=function(e){typeof e=="undefined"&&(e=!1),(b||e)&&o.disable(e)},R=function(e){var t=null;if(e)if(e.match(/\.swf(\?.*)?$/i)){if(t=e.substr(e.toLowerCase().lastIndexOf(".swf?")+4))return e}else e.lastIndexOf("/")!==e.length-1&&(e+="/");return(e&&e.lastIndexOf("/")!==-1?e.substr(0,e.lastIndexOf("/")+1):"./")+o.movieURL},A=function(){c!==8&&c!==9&&(o.flashVersion=8);var e=o.debugMode||o.debugFlash?"_debug.swf":".swf";o.useHTML5Audio&&!st&&o.audioFormats.mp4.required&&o.flashVersion<9&&(o.flashVersion=9),c=o.flashVersion,o.version=o.versionNumber+(st?" (HTML5-only mode)":c===9?" (AS3/Flash 9)":" (AS2/Flash 8)"),c>8&&(o.defaultOptions=S(o.defaultOptions,o.flash9Options),o.features.buffering=!0),c>8&&o.useMovieStar?(o.defaultOptions=S(o.defaultOptions,o.movieStarOptions),o.filePatterns.flash9=RegExp("\\.(mp3|"+o.netStreamTypes.join("|")+")(\\?.*)?$","i"),o.mimePattern=o.netStreamMimeTypes,o.features.movieStar=!0):(o.useMovieStar=!1,o.features.movieStar=!1),o.filePattern=o.filePatterns[c!==8?"flash9":"flash8"],o.movieURL=(c===8?"soundmanager2.swf":"soundmanager2_flash9.swf").replace(".swf",e),o.features.peakData=o.features.waveformData=o.features.eqData=c>8},F=function(e,t){if(!o.o||!o.allowPolling)return!1;o.o._setPolling(e,t)},B=function(e,t){var n=t?t:o.url,r=o.altURL?o.altURL:n,s;s=H();var f,l,c=V(),p,v=null,v=(v=h.getElementsByTagName("html")[0])&&v.dir&&v.dir.match(/rtl/i),e=typeof e=="undefined"?o.id:e;if(m&&g)return!1;if(st)return A(),o.oMC=u(o.movieID),d(),g=m=!0,!1;m=!0,A(),o.url=R(o._overHTTP?n:r),t=o.url,o.wmode=!o.wmode&&o.useHighPerformance&&!o.useMovieStar?"transparent":o.wmode,o.wmode!==null&&(a.match(/msie 8/i)||!yt&&!o.useHighPerformance)&&navigator.platform.match(/win32|win64/i)&&(o.specialWmodeCase=!0,o.wmode=null),s={name:e,id:e,src:t,width:"100%",height:"100%",quality:"high",allowScriptAccess:o.allowScriptAccess,bgcolor:o.bgColor,pluginspage:o._http+"//www.macromedia.com/go/getflashplayer",type:"application/x-shockwave-flash",wmode:o.wmode,hasPriority:"true"},o.debugFlash&&(s.FlashVars="debug=1"),o.wmode||delete s.wmode;if(yt)n=h.createElement("div"),l='<object id="'+e+'" data="'+t+'" type="'+s.type+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="'+o._http+'//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" width="'+s.width+'" height="'+s.height+'"><param name="movie" value="'+t+'" /><param name="AllowScriptAccess" value="'+o.allowScriptAccess+'" /><param name="quality" value="'+s.quality+'" />'+(o.wmode?'<param name="wmode" value="'+o.wmode+'" /> ':"")+'<param name="bgcolor" value="'+o.bgColor+'" />'+(o.debugFlash?'<param name="FlashVars" value="'+s.FlashVars+'" />':"")+"</object>";else for(f in n=h.createElement("embed"),s)s.hasOwnProperty(f)&&n.setAttribute(f,s[f]);i(),c=V();if(s=H())if(o.oMC=u(o.movieID)?u(o.movieID):h.createElement("div"),o.oMC.id)p=o.oMC.className,o.oMC.className=(p?p+" ":o.swfCSS.swfDefault)+(c?" "+c:""),o.oMC.appendChild(n),yt&&(f=o.oMC.appendChild(h.createElement("div")),f.className=o.swfCSS.swfBox,f.innerHTML=l),g=!0;else{o.oMC.id=o.movieID,o.oMC.className=o.swfCSS.swfDefault+" "+c,f=c=null;if(!o.useFlashBlock)if(o.useHighPerformance)c={position:"fixed",width:"8px",height:"8px",bottom:"0px",left:"0px",overflow:"hidden"};else if(c={position:"absolute",width:"6px",height:"6px",top:"-9999px",left:"-9999px"},v)c.left=Math.abs(parseInt(c.left,10))+"px";bt&&(o.oMC.style.zIndex=1e4);if(!o.debugFlash)for(p in c)c.hasOwnProperty(p)&&(o.oMC.style[p]=c[p]);try{yt||o.oMC.appendChild(n),s.appendChild(o.oMC),yt&&(f=o.oMC.appendChild(h.createElement("div")),f.className=o.swfCSS.swfBox,f.innerHTML=l),g=!0}catch(y){throw Error(W("appXHTML"))}}return!0},Q=this.getSoundById,_=function(){return st?(B(),!1):o.o?!1:(o.o=o.getMovie(o.id),o.o||(U?(yt?o.oMC.innerHTML=z:o.oMC.appendChild(U),U=null,m=!0):B(o.id,o.url),o.o=o.getMovie(o.id)),o.oninitmovie instanceof Function&&setTimeout(o.oninitmovie,1),!0)},C=function(e){e&&(o.url=e),_()},k=function(){setTimeout(L,500)},L=function(){if(G)return!1;G=!0,lt.remove(f,"load",k);if(Tt&&!xt)return!1;var e;y||(e=o.getMoviePercent()),setTimeout(function(){e=o.getMoviePercent(),!y&&Nt&&(e===null?o.useFlashBlock||o.flashLoadTimeout===0?o.useFlashBlock&&X():q(!0):o.flashLoadTimeout!==0&&q(!0))},o.flashLoadTimeout)},C=function(e){e&&(o.url=e),_()},V=function(){var e=[];return o.debugMode&&e.push(o.swfCSS.sm2Debug),o.debugFlash&&e.push(o.swfCSS.flashDebug),o.useHighPerformance&&e.push(o.swfCSS.highPerf),e.join(" ")},X=function(){W("fbHandler");var e=o.getMoviePercent(),t=o.swfCSS;o.ok()?o.oMC&&(o.oMC.className=[V(),t.swfDefault,t.swfLoaded+(o.didFlashBlock?" "+t.swfUnblocked:"")].join(" ")):(nt&&(o.oMC.className=V()+" "+t.swfDefault+" "+(e===null?t.swfTimedout:t.swfError)),o.didFlashBlock=!0,T({type:"ontimeout",ignoreInit:!0}),o.onerror instanceof Function&&o.onerror.apply(f))},O=function(){function e(){lt.remove(f,"focus",O),lt.remove(f,"load",O)}return xt||!Tt?(e(),!0):(xt=Nt=!0,wt&&Tt&&lt.remove(f,"mousemove",O),G=!1,e(),!0)},E=function(e){return y?!1:st?(y=!0,T(),N(),!0):(o.useFlashBlock&&o.flashLoadTimeout&&!o.getMoviePercent()||(y=!0),b||e?(o.useFlashBlock&&(o.oMC.className=V()+" "+(o.getMoviePercent()===null?o.swfCSS.swfTimedout:o.swfCSS.swfError)),T({type:"ontimeout"}),o.onerror instanceof Function&&o.onerror.apply(f),!1):(lt.add(f,"unload",p),o.waitForWindowLoad&&!w?(lt.add(f,"load",N),!1):(N(),!0)))},x=function(e,t,n){typeof v[e]=="undefined"&&(v[e]=[]),v[e].push({method:t,scope:n||null,fired:!1})},T=function(e){e||(e={type:"onready"});if(!y&&e&&!e.ignoreInit)return!1;var t={success:e&&e.ignoreInit?o.ok():!b},n=e&&e.type?v[e.type]||[]:[],e=[],r,i=nt&&o.useFlashBlock&&!o.ok();for(r=0;r<n.length;r++)n[r].fired!==!0&&e.push(n[r]);if(e.length){r=0;for(n=e.length;r<n;r++)if(e[r].scope?e[r].method.apply(e[r].scope,[t]):e[r].method(t),!i)e[r].fired=!0}return!0},N=function(){f.setTimeout(function(){o.useFlashBlock&&X(),T(),o.onload instanceof Function&&o.onload.apply(f),o.waitForWindowLoad&&lt.add(f,"load",N)},1)},dt=function(){if(pt!==void 0)return pt;var e=!1,t=navigator,n=t.plugins,r,i=f.ActiveXObject;if(n&&n.length)(t=t.mimeTypes)&&t["application/x-shockwave-flash"]&&t["application/x-shockwave-flash"].enabledPlugin&&t["application/x-shockwave-flash"].enabledPlugin.description&&(e=!0);else if(typeof i!="undefined"){try{r=new i("ShockwaveFlash.ShockwaveFlash")}catch(s){}e=!!r}return pt=e},rt=function(){var e,t;if(a.match(/iphone os (1|2|3_0|3_1)/i))return o.hasHTML5=!1,st=!0,o.oMC&&(o.oMC.style.display="none"),!1;if(!o.useHTML5Audio)return!0;if(!o.html5||!o.html5.canPlayType)return o.hasHTML5=!1,!0;o.hasHTML5=!0;if(St&&dt())return!0;for(t in o.audioFormats)o.audioFormats.hasOwnProperty(t)&&o.audioFormats[t].required&&!o.html5.canPlayType(o.audioFormats[t].type)&&(e=!0);return o.ignoreFlash&&(e=!1),st=o.useHTML5Audio&&o.hasHTML5&&!e&&!o.requireFlash,dt()&&e},d=function(){var e,t=[];if(y)return!1;if(o.hasHTML5)for(e in o.audioFormats)o.audioFormats.hasOwnProperty(e)&&t.push(e+": "+o.html5[e]);if(st)return y||(lt.remove(f,"load",o.beginDelayedInit),o.enabled=!0,E()),!0;_();try{o.o._externalInterfaceTest(!1),o.allowPolling&&F(!0,o.flashPollingInterval?o.flashPollingInterval:o.useFastPolling?10:50),o.debugMode||o.o._disableDebug(),o.enabled=!0}catch(n){return q(!0),E(),!1}return E(),lt.remove(f,"load",o.beginDelayedInit),!0},M=function(){return Z?!1:(B(),_(),Z=!0)},D=function(){return P?!1:(P=!0,i(),!o.useHTML5Audio&&!dt()&&(o.useHTML5Audio=!0),ft(),o.html5.usingFlash=rt(),nt=o.html5.usingFlash,P=!0,h.removeEventListener&&h.removeEventListener("DOMContentLoaded",D,!1),C(),!0)},et=function(e){e._hasTimer||(e._hasTimer=!0)},tt=function(e){e._hasTimer&&(e._hasTimer=!1)},j=function(){o.onerror instanceof Function&&o.onerror(),o.disable()},vt=function(){if(!St||!dt())return!1;var e=o.audioFormats,t,n;for(n in e)if(e.hasOwnProperty(n)&&(n==="mp3"||n==="mp4"))if(o.html5[n]=!1,e[n]&&e[n].related)for(t=e[n].related.length;t--;)o.html5[e[n].related[t]]=!1},this._setSandboxType=function(){},this._externalInterfaceOK=function(){if(o.swfLoaded)return!1;(new Date).getTime(),o.swfLoaded=!0,Tt=!1,St&&vt(),yt?setTimeout(d,100):d()},at=function(){return h.readyState==="complete"&&(D(),h.detachEvent("onreadystatechange",at)),!0};if(!o.hasHTML5||nt)lt.add(f,"focus",O),lt.add(f,"load",O),lt.add(f,"load",k),wt&&Tt&&lt.add(f,"mousemove",O);h.addEventListener?h.addEventListener("DOMContentLoaded",D,!1):h.attachEvent?h.attachEvent("onreadystatechange",at):j(),h.readyState==="complete"&&setTimeout(D,100)}var n=null;if(typeof SM2_DEFER=="undefined"||!SM2_DEFER)n=new t;e.SoundManager=t,e.soundManager=n})(window);