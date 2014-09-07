/// <reference path="interface/surface.ts" />
/// <reference path="image.ts" />
/// <reference path="font.ts" />

module CaptionMaker {
	export class Renderer {
		context: CanvasRenderingContext2D;
		width: number;
		height: number;

		constructor( canvas: HTMLCanvasElement ){
			this.context = canvas.getContext( '2d' );
			this.width = canvas.width;
			this.height = canvas.height;
		}

		render( callback: (context: CanvasRenderingContext2D)=>void ){

			var func = ()=>{
				this.context.clearRect( 0, 0, this.width, this.height );
				callback( this.context );

				requestAnimationFrame( func );
			};

			func();
		}
	}
}
