Reveal.initialize({
    history: true,
    hash: true,
    transition: 'linear',

    math: {
        config: 'TeX-AMS_HTML-full',
        TeX: {
            Macros: {
                R: '\\mathbb{R}',
                mat: '\\mathbf',
                set: ['\\left\\{#1 \\; ; \\; #2\\right\\}', 2]
            }
        }
    },

    plugins: [RevealMath, RevealMarkdown, RevealHighlight, RevealSearch, RevealZoom]
});


function drawMatrix(matrix, roughCanvas, ctx, cellSize, fillMask = null) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const width = cellSize * cols;
    const height = cellSize * rows;
    
    // Get canvas dimensions and calculate center
    const canvasWidth = ctx.canvas.width;
    const canvasHeight = ctx.canvas.height;
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;
    
    // Calculate top-left corner based on center coordinates
    const startX = centerX - width/2;
    const startY = centerY - height/2;
    
    // Draw the overall matrix border
    roughCanvas.rectangle(startX, startY, width, height, { roughness: 1.5 });
    
    // Draw individual cells and text
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            var x = startX + j * cellSize;
            var y = startY + i * cellSize;
            
            // Check if we need to fill this cell with color
            if (fillMask && fillMask[i] && fillMask[i][j] !== null) {
                roughCanvas.rectangle(x, y, cellSize, cellSize, {
                    fill: fillMask[i][j],
                    fillStyle: 'hachure',
                    hachureAngle: 60,
                    hachureGap: 8
                });
            } else {
                roughCanvas.rectangle(x, y, cellSize, cellSize, { roughness: 1 });
            }
            
            // Draw text with regular canvas
            ctx.font = '20px IBM Plex Mono';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(matrix[i][j].toString(), x + cellSize/2, y + cellSize/2);
        }
    }
}
