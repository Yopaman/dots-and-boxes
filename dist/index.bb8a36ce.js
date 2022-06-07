class e{constructor(e,t){this.board=[],this.height=t,this.width=e;for(let s=0;s<t;s++){let t=[];for(let s=0;s<e;s++)t.push({owner:null,linesOwners:{top:null,left:null,right:null,bottom:null}});this.board.push(t)}}setSquareOwner(e,t,s){this.board[t][e].owner=s}setLineOwner(e,t,s,r){switch(s){case"right":this.board[t][e].linesOwners.right=r,e<this.width-1&&(this.board[t][e+1].linesOwners.left=r);break;case"left":this.board[t][e].linesOwners.left=r,e>0&&(this.board[t][e-1].linesOwners.right=r);break;case"top":this.board[t][e].linesOwners.top=r,t>0&&(this.board[t-1][e].linesOwners.bottom=r);break;case"bottom":this.board[t][e].linesOwners.bottom=r,t<this.height-1&&(this.board[t+1][e].linesOwners.top=r)}}printBoard(){let e="";for(let t=0;t<this.height;t++){for(let t=0;t<this.width;t++)e+=0==t?"□ ":" □ ";e+="\n"}console.log(e)}}class t extends HTMLElement{connectedCallback(){document.querySelector(".replay-button").addEventListener("click",(()=>{this.replay()}))}constructor(){super();const e=document.createElement("div");e.classList.add("overlay");const t=document.createElement("div");t.classList.add("form-container");const s=document.createElement("h1");s.classList.add("end-text");const r=document.createElement("button");r.classList.add("replay-button"),r.appendChild(document.createTextNode("Rejouer")),t.appendChild(s),t.appendChild(r),e.appendChild(t),this.appendChild(e)}setWinner(e){const t=document.querySelector(".end-text");null==e?t.appendChild(document.createTextNode("Égalité")):t.appendChild(document.createTextNode("Victoire de "+e))}replay(){const e=document.querySelector(".app"),t=document.querySelector("game-board"),s=document.querySelector("game-infos"),r=document.querySelector("game-creation");e.removeChild(t),e.removeChild(s),e.removeChild(r);const a=document.createElement("game-creation");e.appendChild(a),customElements.define("game-creation",n)}}class s extends HTMLElement{get board_height(){return this.hasAttribute("board-height")?parseInt(this.getAttribute("board-height")):10}get board_width(){return this.hasAttribute("board-width")?parseInt(this.getAttribute("board-width")):10}connectedCallback(){const e=document.getElementsByTagName("td");for(let s=0;s<e.length;s++)["left","right","top","bottom"].forEach((r=>{const a=e[s].querySelector(".hitbox-"+r);a.addEventListener("mouseenter",(()=>{this.interractLine(Array.from(e[s].parentNode.children).indexOf(e[s]),Array.from(e[s].parentNode.parentNode.children).indexOf(e[s].parentElement),r,"select",this.game.players[this.game.currentPlayer].color)})),a.addEventListener("mouseleave",(()=>{this.interractLine(Array.from(e[s].parentNode.children).indexOf(e[s]),Array.from(e[s].parentNode.parentNode.children).indexOf(e[s].parentElement),r,"reset")})),a.addEventListener("click",(()=>{const a=Array.from(e[s].parentNode.children).indexOf(e[s]),n=Array.from(e[s].parentNode.parentNode.children).indexOf(e[s].parentElement),l=this.game.players[this.game.currentPlayer];this.interractLine(a,n,r,"click",l.color);const o=this.game.playTurn(a,n,r);if(document.querySelector("game-infos").updateScore(),o!=[])for(let e=0;e<o.length;e++)this.setBgColor(o[e][0],o[e][1],l.color);if(this.game.isGameFinished()){const e=document.createElement("end-screen");document.querySelector("body").appendChild(e),customElements.define("end-screen",t),t.prototype.setWinner(this.game.getWinner())}}))}))}constructor(){super();const e=document.createElement("tbody");for(let t=0;t<this.board_height;t++){const s=document.createElement("tr");for(let e=0;e<this.board_width;e++){const r=document.createElement("span");r.className="dot dot-top-right";const a=document.createElement("span");a.className=" dot dot-top-left";const n=document.createElement("span");n.className="dot dot-bottom-right";const l=document.createElement("span");l.className="dot dot-bottom-left";const o=document.createElement("td");o.className="square",o.appendChild(a),e==this.board_width-1&&o.appendChild(r),t==this.board_height-1&&o.appendChild(l),t==this.board_height-1&&e==this.board_width-1&&o.appendChild(n),["left","right","top","bottom"].forEach((e=>{const t=document.createElement("span");t.className="hitbox hitbox-"+e,o.appendChild(t)})),s.appendChild(o)}e.appendChild(s)}const t=document.createElement("table");t.appendChild(e),this.appendChild(t)}interractLine(e,t,s,r="select",a="none"){const n="select"==r?"selected":"clicked",l=this.getElementsByTagName("table")[0],o=l.rows[t].cells[e];if("click"==r&&o.className.includes("selected-"+s)&&o.classList.remove("selected-"+s),!o.className.includes("clicked-"+s)){switch(s){case"right":if(e<this.board_width-1){const s=l.rows[t].cells[e+1];"click"==r&&s.className.includes("selected-left")&&s.classList.remove("selected-left"),"reset"==r?["selected"].forEach((e=>s.classList.remove(e+"-left"))):s.classList.add(n+"-left"),"click"==r&&s.classList.add(a+"-left")}"reset"==r?["selected"].forEach((e=>o.classList.remove(e+"-right"))):o.classList.add(n+"-right");break;case"left":if(e>0){const s=l.rows[t].cells[e-1];"click"==r&&s.className.includes("selected-right")&&s.classList.remove("selected-right"),"reset"==r?["selected"].forEach((e=>s.classList.remove(e+"-right"))):s.classList.add(n+"-right"),"click"==r&&s.classList.add(a+"-right")}"reset"==r?["selected"].forEach((e=>o.classList.remove(e+"-left"))):o.classList.add(n+"-left");break;case"top":if(t>0){const s=l.rows[t-1].cells[e];"click"==r&&s.className.includes("selected-bottom")&&s.classList.remove("selected-bottom"),"reset"==r?["selected"].forEach((e=>s.classList.remove(e+"-bottom"))):s.classList.add(n+"-bottom"),"click"==r&&s.classList.add(a+"-bottom")}"reset"==r?["selected"].forEach((e=>o.classList.remove(e+"-top"))):o.classList.add(n+"-top");break;case"bottom":if(t<this.board_height-1){const s=l.rows[t+1].cells[e];"click"==r&&s.className.includes("selected-")&&s.classList.remove("selected-top"),"reset"==r?["selected"].forEach((e=>s.classList.remove(e+"-top"))):s.classList.add(n+"-top"),"click"==r&&s.classList.add(a+"-top")}"reset"==r?["selected"].forEach((e=>o.classList.remove(e+"-bottom"))):o.classList.add(n+"-bottom")}"click"==r&&o.classList.add(a+"-"+s)}}setBgColor(e,t,s){this.getElementsByTagName("table")[0].rows[t].cells[e].classList.add("background-"+s)}}class r{constructor(e,...t){this.board=e;const s=["blue","red"];this.players=[];let r=0;t.map((e=>{this.players.push({name:e,score:0,color:s[r]}),r++})),this.currentPlayer=0}playLine(e,t,s,r){this.board.setLineOwner(e,t,s,r)}nextPlayer(){this.currentPlayer!=this.players.length-1?this.currentPlayer++:this.currentPlayer=0}isSquareFull(e){return null!=e.linesOwners.left&&null!=e.linesOwners.top&&null!=e.linesOwners.right&&null!=e.linesOwners.bottom}isGameFinished(){const e=this.board.width*this.board.height;let t=0;for(let e=0;e<this.board.height;e++)for(let s=0;s<this.board.width;s++){if(null==this.board.board[e][s].owner)return!1;t++}return t==e}getWinner(){return this.players[0].score>this.players[1].score?this.players[0].name:this.players[1].score>this.players[0].score?this.players[1].name:null}calculateBoxes(){let e=0,t=[];for(let s=0;s<this.board.height;s++)for(let r=0;r<this.board.width;r++)null==this.board.board[s][r].owner&&this.isSquareFull(this.board.board[s][r])&&(this.board.board[s][r].owner=this.players[this.currentPlayer].name,e++,t.push([r,s]));return{score:e,xy:t}}playTurn(e,t,s){this.playLine(e,t,s,this.players[this.currentPlayer].name);let r=this.calculateBoxes(),a=r.score;return a<=0?this.nextPlayer():this.players[this.currentPlayer].score+=a,r.xy}}class a extends HTMLElement{constructor(){super();const e=document.createElement("div");e.classList.add("game-infos-container");const t=document.createElement("span"),s=document.createElement("span");t.classList.add("score-1"),s.classList.add("score-2"),t.innerHTML=this.game.players[0].name+" : "+this.game.players[0].score.toString(),s.innerHTML=this.game.players[1].name+" : "+this.game.players[1].score.toString();const r=document.createElement("div");r.classList.add("scores"),r.appendChild(t),r.appendChild(s),e.appendChild(r);const a=document.createElement("span");a.classList.add("current-player"),a.innerHTML="Au tour de "+this.game.players[this.game.currentPlayer].name+" de jouer",e.appendChild(a),this.appendChild(e)}updateScore(){const e=document.querySelector(".score-1"),t=document.querySelector(".score-2"),s=document.querySelector(".current-player");e.innerHTML=this.game.players[0].name+" : "+this.game.players[0].score,t.innerHTML=this.game.players[1].name+" : "+this.game.players[1].score,s.innerHTML="Au tour de "+this.game.players[this.game.currentPlayer].name+" de jouer"}}class n extends HTMLElement{connectedCallback(){document.querySelector(".validate-button").addEventListener("click",(()=>{this.createGame()}))}constructor(){super();const e=document.createElement("div");e.classList.add("overlay");const t=document.createElement("div");t.classList.add("form-container");const s=document.createElement("input");s.classList.add("player1-input"),s.setAttribute("value","Joueur 1");const r=document.createElement("input");r.classList.add("player2-input"),r.setAttribute("value","Joueur 2");const a=document.createElement("button");a.classList.add("validate-button"),a.appendChild(document.createTextNode("Valider"));const n=document.createElement("div");n.classList.add("inputs-container"),n.appendChild(s),n.appendChild(r);const l=document.createElement("label");l.appendChild(document.createTextNode("Taille de la grille :"));const o=document.createElement("input");o.classList.add("size-input"),o.setAttribute("type","number"),o.setAttribute("value","5"),o.setAttribute("min","4"),o.setAttribute("max","20"),t.appendChild(n),t.appendChild(l),t.appendChild(o),t.appendChild(a),e.appendChild(t),this.appendChild(e)}createGame(){const t=document.querySelector(".size-input"),n=parseInt(t.value),l=new e(n,n),o=document.querySelector(".player1-input").value,c=document.querySelector(".player2-input").value;document.querySelector(".overlay").style.display="none";const i=document.createElement("game-board");i.setAttribute("board-width",n.toString()),i.setAttribute("board-height",n.toString()),document.querySelector(".app").appendChild(i),customElements.define("game-board",s);const d=new r(l,o,c);s.prototype.game=d,a.prototype.game=d;const h=document.createElement("game-infos");customElements.define("game-infos",a),document.querySelector(".app").appendChild(h)}}customElements.define("game-creation",n);
//# sourceMappingURL=index.bb8a36ce.js.map
