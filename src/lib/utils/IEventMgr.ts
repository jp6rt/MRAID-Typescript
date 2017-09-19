import * as global from "../globals/Global"

interface IEventMgr<H> {
	exists(e: string): boolean;
	subscribe(e: string, callback: global.Callback, scope?: H): void;
	unsubscribe(e: string, callback: global.Callback): void;
	dispatch(e: string, ...args: any[]): void;
}

export default IEventMgr;