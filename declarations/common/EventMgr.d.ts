import IEventMgr from './IEventMgr';
declare class EventMgr<M, H> implements IEventMgr<H> {
    private subscriptions;
    constructor(events: M);
    exists(e: string): boolean;
    subscribe(e: string, callback: Function, scope?: H): void;
    unsubscribe(e: string, callback: Function): void;
    dispatch(e: string, ...args: any[]): void;
}
export default EventMgr;
