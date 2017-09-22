import callback from '../../common/callback'
import ExpandProperties from './ExpandProperties'

interface IMRAID {
	addEventListener(event: string, callback: callback): void
	close(): void
	expand(url?: string): void
	getExpandProperties(): ExpandProperties
	getPlacementType(): string
	getState(): string
	getVersion(): string
	isViewable(): boolean
	open(url: string): void
	removeEventListener(event: string, callback: callback): void
	setExpandProperties(expandProperties: ExpandProperties): void
	useCustomClose(customClose: boolean): void
}

export default IMRAID