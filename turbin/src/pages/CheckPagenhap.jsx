import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStickyState } from '../hooks/useStickyState';

export default function CheckPage() {
  const { id } = useParams();
  const [turbins] = useStickyState([], 'turbins');
  const turbin = turbins.find(t => t.id === id) || {};

  // Mock detection data (YOLOv8-like)
  const [detections] = useState([
    { x: 20, y: 30, w: 100, h: 80, label: 'LE erosion' },
    { x: 150, y: 120, w: 60, h: 60, label: 'Blade crack' }
  ]);

  const imgRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      // Draw mock bounding boxes
      detections.forEach(d => {
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 2;
        ctx.strokeRect(d.x, d.y, d.w, d.h);
        ctx.fillStyle = 'red';
        ctx.fillText(d.label, d.x, d.y - 5);
      });
    };

    // Use a placeholder or previously uploaded image blob
    // Here we mock by creating an empty blob URL
    img.src = URL.createObjectURL(new Blob());
  }, [detections]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Check: {turbin.turbine}</h2>
      <div>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}
