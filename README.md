# FractalExplorer

The problem my project will solve is the gap in truly interactive, high-quality fractal visualisers. It will be a useful educational tool for teaching students about fractals in the complex plane in a visual, interactive way.

My program’s aim is to generate and display a fractal in the complex plane (such as the Mandelbrot Set and Newton’s Fractals, generated using iterative methods) that the user can traverse by panning and zooming. The fractal will regenerate at increasing levels of precision as it is zoomed into, creating the illusion of infinite detail.

The user can then “record” a route through the fractal and press “generate”; a high-resolution video following this route through the fractal will be generated using compute shaders, where the GPU can iterate many complex inputs in parallel.
