// Simulated AI analysis with random data
export async function analyzeCropImage(file: File) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Generate random analysis results
  const ripeness = Math.floor(Math.random() * 30) + 70; // 70-100%
  const freshnessDays = Math.floor(Math.random() * 7) + 3; // 3-10 days
  const confidence = Math.floor(Math.random() * 20) + 80; // 80-100%

  const recommendations = [
    'Store in a cool, dry place to maximize freshness',
    `Optimal for consumption within ${freshnessDays} days`,
    ripeness > 90 
      ? 'Ready for immediate consumption'
      : 'Allow additional ripening at room temperature',
    'Avoid exposure to direct sunlight',
  ];

  return {
    ripeness,
    freshnessDays,
    confidence,
    recommendations,
  };
}