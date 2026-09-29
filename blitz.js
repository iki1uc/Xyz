function neuerBlitz() {
  const startX = W * (0.2 + Math.random() * 0.6);
  const zielX  = W * (0.15 + Math.random() * 0.7);
  const zielY  = H * (0.75 + Math.random() * 0.15);
  
  // Der Blitz atmet: kurz, mittel, lang, kurz
  // 3 → 9 → 81 → 3 (verhältnis: 1 : 3 : 9 : 3... aber visuell: kurz, lang, länger, zurück)
  const startY = -20;
  const gesamtH = zielY - startY;
  
  // 4 Segmente mit Längen 3, 9, 81, 3 (verhältnis)
  // Normalisiert: 3/(3+9+81+3), 9/96, 81/96, 3/96
  const anteile = [3, 9, 81, 3].map(v => v / 96);
  
  const pts = [{ x: startX, y: startY }];
  let cx = startX, cy = startY;
  anteile.forEach((a, i) => {
    const ny = cy + gesamtH * a;
    const nx = cx + (zielX - cx) * a * 1.5 + (Math.random() - 0.5) * W * 0.08;
    pts.push({ x: nx, y: ny, mark: i }); // mark = symbol index
    cx = nx; cy = ny;
  });
  // ein wenig überziel hinaus für boden
  pts.push({ x: zielX, y: zielY });
  
  return { pts, ... };
}
