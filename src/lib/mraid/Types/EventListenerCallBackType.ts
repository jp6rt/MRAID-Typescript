import MRAID1State from "../States/MRAID1State";

interface ReadyEventCallback {
	(): any
}

interface ErrorEventCallback {
	(message: string, action: string): any
}

interface StateChangeCallback {
	(state: string): any
}

interface ViewableChangeCallback {
	(viewable: boolean): any
}

type EventListenerCallBackType = ReadyEventCallback | ErrorEventCallback | StateChangeCallback | ViewableChangeCallback;

export {
	ReadyEventCallback, 
	ErrorEventCallback, 
	StateChangeCallback, 
	ViewableChangeCallback
};