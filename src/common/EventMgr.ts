import IEventMgr from './IEventMgr'
import callback from './callback'

class EventMgr<M, H> implements IEventMgr<H> {
	private subscriptions: any = {};
	constructor(events: M){
		for(var e in events){
			this.subscriptions[e] = new Array
		}
	}	
	exists(e: string): boolean {
		return this.subscriptions.hasOwnProperty(e) && typeof this.subscriptions[e] == 'object'
	}
	subscribe(e: string, callback: callback, scope?: H): void {
		if(!this.exists(e))
			return;
		let s = !!scope ? {
			callback: callback,
			scope: scope
		} : { callback: callback }
		this.subscriptions[e].push(s);
	}
	unsubscribe(e: string, callback: callback): void {
		if(!this.exists(e))
			return;
		for(let a in this.subscriptions[e])
			if(this.subscriptions[e][a].callback == callback)
				this.subscriptions[e][a] = void 0
	}
	dispatch(e: string, ...args: any[]): void {
		if(!this.exists(e))
			return;
		for(let a in this.subscriptions[e])
			if(this.subscriptions[e][a])
				this.subscriptions[e][a].scope ? this.subscriptions[e][a].callback.apply(this.subscriptions[e][a].scope, args) : this.subscriptions[e][a].callback(...args);
	}
}

export default EventMgr