import callback from './callback';
interface IEventMgr<H> {
    exists(e: string): boolean;
    subscribe(e: string, callback: callback, scope?: H): void;
    unsubscribe(e: string, callback: callback): void;
    dispatch(e: string, ...args: any[]): void;
}
export default IEventMgr;
