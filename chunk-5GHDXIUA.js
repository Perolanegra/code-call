import{A as _e,I as A,K as ot,a as We,d as Qe,g as de,j as Ke,k as $e,m as pe,n as qe,o as Je,p as et,q as tt,r as nt,t as it,w as st,x as G,y as W,z as he}from"./chunk-PZDGO52Z.js";import{f as U,g as Ze,h as X}from"./chunk-IHQZREHT.js";import{$a as Se,C as Ee,Eb as He,Fb as oe,Gb as re,Hb as ae,Ib as le,Ic as S,Jb as Ve,Kc as D,N as B,O as ee,Ob as Ye,P as Ie,Pb as ze,Ra as ne,Sb as ce,Tb as je,Ub as M,Vb as me,W as H,Wa as Pe,Wb as j,Xa as ie,Xb as Ue,Y as g,Yb as Xe,Za as Oe,Zb as k,_ as r,_b as P,a as N,ab as se,d as E,ea as I,eb as b,ec as O,fa as R,fb as z,fc as Ge,ga as Re,gb as p,i as J,ia as f,ja as te,jb as Ae,lb as Fe,ma as V,na as Y,qc as ue,ra as xe,rb as Ne,v as L,vb as x,x as Te,xa as y,ya as ke,yb as Le,zb as Be}from"./chunk-DJHGFVJ5.js";import{a as c,b as Ce}from"./chunk-7CGTOI24.js";var rt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=b({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,n){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var m=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})(m||{}),ge=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=m.HIDDEN;constructor(s,e,t,n=!1){this._renderer=s,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=n}fadeOut(){this._renderer.fadeOutRipple(this)}},at=he({passive:!0,capture:!0}),fe=class{_events=new Map;addHandler(s,e,t,n){let o=this._events.get(e);if(o){let a=o.get(t);a?a.add(n):o.set(t,new Set([n]))}else this._events.set(e,new Map([[t,new Set([n])]])),s.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,at)})}removeHandler(s,e,t){let n=this._events.get(s);if(!n)return;let o=n.get(e);o&&(o.delete(t),o.size===0&&n.delete(e),n.size===0&&(this._events.delete(s),document.removeEventListener(s,this._delegateEventHandler,at)))}_delegateEventHandler=s=>{let e=Qe(s);e&&this._events.get(s.type)?.forEach((t,n)=>{(n===e||n.contains(e))&&t.forEach(o=>o.handleEvent(s))})}},lt={enterDuration:225,exitDuration:150},vt=800,ct=he({passive:!0,capture:!0}),mt=["mousedown","touchstart"],ut=["mouseup","mouseleave","touchend","touchcancel"],yt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=b({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,n){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),be=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new fe;constructor(s,e,t,n,o){this._target=s,this._ngZone=e,this._platform=n,n.isBrowser&&(this._containerElement=de(t)),o&&o.get(U).load(yt)}fadeInRipple(s,e,t={}){let n=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=c(c({},lt),t.animation);t.centered&&(s=n.left+n.width/2,e=n.top+n.height/2);let a=t.radius||Mt(s,e,n),u=s-n.left,C=e-n.top,d=o.enterDuration,l=document.createElement("div");l.classList.add("mat-ripple-element"),l.style.left=`${u-a}px`,l.style.top=`${C-a}px`,l.style.height=`${a*2}px`,l.style.width=`${a*2}px`,t.color!=null&&(l.style.backgroundColor=t.color),l.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(l);let v=window.getComputedStyle(l),h=v.transitionProperty,T=v.transitionDuration,$=h==="none"||T==="0s"||T==="0s, 0s"||n.width===0&&n.height===0,_=new ge(this,l,t,$);l.style.transform="scale3d(1, 1, 1)",_.state=m.FADING_IN,t.persistent||(this._mostRecentTransientRipple=_);let F=null;return!$&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let De=()=>{F&&(F.fallbackTimer=null),clearTimeout(we),this._finishRippleTransition(_)},q=()=>this._destroyRipple(_),we=setTimeout(q,d+100);l.addEventListener("transitionend",De),l.addEventListener("transitioncancel",q),F={onTransitionEnd:De,onTransitionCancel:q,fallbackTimer:we}}),this._activeRipples.set(_,F),($||!d)&&this._finishRippleTransition(_),_}fadeOutRipple(s){if(s.state===m.FADING_OUT||s.state===m.HIDDEN)return;let e=s.element,t=c(c({},lt),s.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",s.state=m.FADING_OUT,(s._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(s)}fadeOutAll(){this._getActiveRipples().forEach(s=>s.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(s=>{s.config.persistent||s.fadeOut()})}setupTriggerEvents(s){let e=de(s);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,mt.forEach(t=>{i._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(s){s.type==="mousedown"?this._onMousedown(s):s.type==="touchstart"?this._onTouchStart(s):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{ut.forEach(e=>{this._triggerElement.addEventListener(e,this,ct)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(s){s.state===m.FADING_IN?this._startFadeOutTransition(s):s.state===m.FADING_OUT&&this._destroyRipple(s)}_startFadeOutTransition(s){let e=s===this._mostRecentTransientRipple,{persistent:t}=s.config;s.state=m.VISIBLE,!t&&(!e||!this._isPointerDown)&&s.fadeOut()}_destroyRipple(s){let e=this._activeRipples.get(s)??null;this._activeRipples.delete(s),this._activeRipples.size||(this._containerRect=null),s===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),s.state=m.HIDDEN,e!==null&&(s.element.removeEventListener("transitionend",e.onTransitionEnd),s.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),s.element.remove()}_onMousedown(s){let e=G(s),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+vt;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(s.clientX,s.clientY,this._target.rippleConfig))}_onTouchStart(s){if(!this._target.rippleDisabled&&!W(s)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=s.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(s=>{let e=s.state===m.VISIBLE||s.config.terminateOnPointerUp&&s.state===m.FADING_IN;!s.config.persistent&&e&&s.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let s=this._triggerElement;s&&(mt.forEach(e=>i._eventManager.removeHandler(e,s,this)),this._pointerUpEventsRegistered&&(ut.forEach(e=>s.removeEventListener(e,this,ct)),this._pointerUpEventsRegistered=!1))}};function Mt(i,s,e){let t=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),n=Math.max(Math.abs(s-e.top),Math.abs(s-e.bottom));return Math.sqrt(t*t+n*n)}var Dt=new g("mat-ripple-global-options"),dt=(()=>{class i{_elementRef=r(y);_animationsDisabled=A();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=r(Y),t=r(We),n=r(Dt,{optional:!0}),o=r(f);this._globalOptions=n||{},this._rippleRenderer=new be(this,e,this._elementRef,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:c(c(c({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,n){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,c(c({},this.rippleConfig),n)):this._rippleRenderer.fadeInRipple(0,0,c(c({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=p({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,n){t&2&&O("mat-ripple-unbounded",n.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return i})();var pt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=H({imports:[X]})}return i})();var Rt=["mat-menu-item",""],xt=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],kt=["mat-icon, [matMenuItemIcon]","*"];function Pt(i,s){i&1&&(Re(),oe(0,"svg",2),ae(1,"polygon",3),re())}var Ot=["*"];function St(i,s){if(i&1){let e=Ye();le(0,"div",0),je("click",function(){I(e);let n=M();return R(n.closed.emit("click"))})("animationstart",function(n){I(e);let o=M();return R(o._onAnimationStart(n.animationName))})("animationend",function(n){I(e);let o=M();return R(o._onAnimationDone(n.animationName))})("animationcancel",function(n){I(e);let o=M();return R(o._onAnimationDone(n.animationName))}),le(1,"div",1),j(2),Ve()()}if(i&2){let e=M();Ge(e._classList),O("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),ze("id",e.panelId),x("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var Me=new g("MAT_MENU_PANEL"),ye=(()=>{class i{_elementRef=r(y);_document=r(te);_focusMonitor=r(_e);_parentMenu=r(Me,{optional:!0});_changeDetectorRef=r(S);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new E;_focused=new E;_highlighted=!1;_triggersSubmenu=!1;constructor(){r(U).load(rt),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=b({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,n){t&1&&ce("click",function(a){return n._checkDisabled(a)})("mouseenter",function(){return n._handleMouseEnter()}),t&2&&(x("role",n.role)("tabindex",n._getTabIndex())("aria-disabled",n.disabled)("disabled",n.disabled||null),O("mat-mdc-menu-item-highlighted",n._highlighted)("mat-mdc-menu-item-submenu-trigger",n._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",D],disableRipple:[2,"disableRipple","disableRipple",D]},exportAs:["matMenuItem"],attrs:Rt,ngContentSelectors:kt,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,n){t&1&&(me(xt),j(0),oe(1,"span",0),j(2,1),re(),ae(3,"div",1),Le(4,Pt,2,0,":svg:svg",2)),t&2&&(ne(3),He("matRippleDisabled",n.disableRipple||n.disabled)("matRippleTrigger",n._getHostElement()),ne(),Be(n._triggersSubmenu?4:-1))},dependencies:[dt],encapsulation:2,changeDetection:0})}return i})();var gt=new g("MatMenuContent"),In=(()=>{class i{_template=r(ie);_appRef=r(Ne);_injector=r(f);_viewContainerRef=r(se);_document=r(te);_changeDetectorRef=r(S);_portal;_outlet;_attached=new E;constructor(){}attach(e={}){this._portal||(this._portal=new pe(this._template,this._viewContainerRef)),this.detach(),this._outlet||(this._outlet=new qe(this._document.createElement("div"),this._appRef,this._injector));let t=this._template.elementRef.nativeElement;t.parentNode.insertBefore(this._outlet.outletElement,t),this._changeDetectorRef.markForCheck(),this._portal.attach(this._outlet,e),this._attached.next()}detach(){this._portal?.isAttached&&this._portal.detach()}ngOnDestroy(){this.detach(),this._outlet?.dispose()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=p({type:i,selectors:[["ng-template","matMenuContent",""]],features:[ue([{provide:gt,useExisting:i}])]})}return i})(),At=new g("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),ve="_mat-menu-enter",Z="_mat-menu-exit",K=(()=>{class i{_elementRef=r(y);_changeDetectorRef=r(S);_injector=r(f);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=A();_allItems;_directDescendantItems=new ke;_classList={};_panelAnimationState="void";_animationDone=new E;_isAnimating=xe(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let t=this._previousPanelClass,n=c({},this._classList);t&&t.length&&t.split(" ").forEach(o=>{n[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{n[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=n}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new V;close=this.closed;panelId=r($e).getId("mat-menu-panel-");constructor(){let e=r(At);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new ot(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(B(this._directDescendantItems),ee(e=>L(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let n=e.toArray(),o=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[o]&&!n[o].disabled?t.setActiveItem(o):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(B(this._directDescendantItems),ee(t=>L(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:Je(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&n.setFocusOrigin("keyboard"),n.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Pe(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=Ce(c({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===Z;(t||e===ve)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===ve||e===Z)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Z),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?ve:Z)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(B(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=b({type:i,selectors:[["mat-menu"]],contentQueries:function(t,n,o){if(t&1&&Ue(o,gt,5)(o,ye,5)(o,ye,4),t&2){let a;k(a=P())&&(n.lazyContent=a.first),k(a=P())&&(n._allItems=a),k(a=P())&&(n.items=a)}},viewQuery:function(t,n){if(t&1&&Xe(ie,5),t&2){let o;k(o=P())&&(n.templateRef=o.first)}},hostVars:3,hostBindings:function(t,n){t&2&&x("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",D],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:D(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[ue([{provide:Me,useExisting:i}])],ngContentSelectors:Ot,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,n){t&1&&(me(),Fe(0,St,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),Ft=new g("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let i=r(f);return()=>et(i)}});var w=new WeakMap,Nt=(()=>{class i{_canHaveBackdrop;_element=r(y);_viewContainerRef=r(se);_menuItemInstance=r(ye,{optional:!0,self:!0});_dir=r(Ze,{optional:!0});_focusMonitor=r(_e);_ngZone=r(Y);_injector=r(f);_scrollStrategy=r(Ft);_changeDetectorRef=r(S);_animationsDisabled=A();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=N.EMPTY;_menuCloseSubscription=N.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=r(Me,{optional:!0});this._parentMaterialMenu=t instanceof K?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&w.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=w.get(t);w.set(t,this),n&&n!==this&&n._closeMenu();let o=this._createOverlay(t),a=o.getConfig(),u=a.positionStrategy;this._setPosition(t,u),this._canHaveBackdrop?a.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:a.hasBackdrop=t.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof K&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(Ie(t.close)).subscribe(()=>{u.withLockedPosition(!1).reapplyLastPosition(),u.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof K&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(Ee(1)).subscribe(()=>{t.detach(),w.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&w.delete(n),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=it(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof K&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new tt({positionStrategy:nt(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let o=n.connectionPair.overlayX==="start"?"after":"before",a=n.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,a)})})}_setPosition(e,t){let[n,o]=e.xPosition==="before"?["end","start"]:["start","end"],[a,u]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[C,d]=[a,u],[l,v]=[n,o],h=0;if(this._triggersSubmenu()){if(v=n=e.xPosition==="before"?"start":"end",o=l=n==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let T=this._parentMaterialMenu.items.first;this._parentInnerPadding=T?T._getHostElement().offsetTop:0}h=a==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(C=a==="top"?"bottom":"top",d=u==="top"?"bottom":"top");t.withPositions([{originX:n,originY:C,overlayX:l,overlayY:a,offsetY:h},{originX:o,originY:C,overlayX:v,overlayY:a,offsetY:h},{originX:n,originY:d,overlayX:l,overlayY:u,offsetY:-h},{originX:o,originY:d,overlayX:v,overlayY:u,offsetY:-h}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:J(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Te(a=>this._menuOpen&&a!==this._menuItemInstance)):J();return L(e,n,o,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new pe(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return w.get(e)===this}_triggerIsAriaDisabled(){return D(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){Se()};static \u0275dir=p({type:i})}return i})(),ft=(()=>{class i extends Nt{_cleanupTouchstart;_hoverSubscription=N.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new V;onMenuOpen=this.menuOpened;menuClosed=new V;onMenuClose=this.menuClosed;constructor(){super(!0);let e=r(Oe);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{W(t)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){G(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=p({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,n){t&1&&ce("click",function(a){return n._handleClick(a)})("mousedown",function(a){return n._handleMousedown(a)})("keydown",function(a){return n._handleKeydown(a)}),t&2&&x("aria-haspopup",n.menu?"menu":null)("aria-expanded",n.menuOpen)("aria-controls",n.menuOpen?n.menu==null?null:n.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[Ae]})}return i})();var Rn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=H({imports:[pt,st,X,Ke]})}return i})();var bt=class i{constructor(){r(ft).restoreFocus=!1}static \u0275fac=function(e){return new(e||i)};static \u0275dir=p({type:i,selectors:[["","matMenuTriggerFor",""]]})};export{rt as a,lt as b,be as c,Dt as d,dt as e,pt as f,ye as g,In as h,K as i,ft as j,Rn as k,bt as l};
