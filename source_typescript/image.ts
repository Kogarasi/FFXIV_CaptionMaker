/// <reference path="interface/surface.ts" />

module CaptionMaker {
	export class Image implements Surface {
		placeholder: HTMLImageElement;
		constructor(){
			this.placeholder = document.createElement( "img" );
		}

		public set src( _src: string ){
			this.placeholder.src = _src;
		}

		render( context: CanvasRenderingContext2D ){
			context.drawImage( this.placeholder, 0, 0 );
		}
	}
}
