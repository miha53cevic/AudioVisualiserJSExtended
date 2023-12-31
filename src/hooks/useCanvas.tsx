import React from "react";

type CanvasContext = {
    '2d': CanvasRenderingContext2D,
    'webgl2': WebGL2RenderingContext,
};
export type CanvasTypes = keyof CanvasContext;

export interface useCanvasProps<T extends keyof CanvasContext> {
    contextId: T,
    render: (context: CanvasContext[T]) => void,
}

function useCanvas<T extends keyof CanvasContext>
    ({ contextId, render }: useCanvasProps<T>) {

    const canvasRef = React.useRef<HTMLCanvasElement>(null);

    React.useEffect(() => {
        if (!canvasRef.current) return;
        
        const context = canvasRef.current.getContext(contextId);
        if (context === null) {
            console.error("Could not retrieve context!");
            return;
        }

        let animationFrameId: number;
        function renderLoop(context: RenderingContext) {
            // Drawing code
            render(context as CanvasContext[T]); // casts to correct RenderingContext type
            // Continue render loop
            animationFrameId = requestAnimationFrame(() => renderLoop(context));
        }
        // Start the loop
        renderLoop(context);

        return () => {
            cancelAnimationFrame(animationFrameId);
        }

    }, [contextId, render]);

    return canvasRef;
}

export default useCanvas;