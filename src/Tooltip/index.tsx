import React, { useState } from 'react';

interface TooltipProps {
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  backgroundColor?: string;
  color?: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = 'top',
  backgroundColor = 'rgba(0, 0, 0, 0.8)',
  color = '#fff',
  children,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const getTooltipStyle = (): React.CSSProperties => {
    switch (position) {
      case 'bottom':
        return {
          top: 'calc(100% + 8px)',
          left: '50%',
          transform: 'translateX(-50%)',
        };
      case 'top':
        return {
          bottom: 'calc(100% + 8px)',
          left: '50%',
          transform: 'translateX(-50%)',
        };
      case 'left':
        return {
          top: '50%',
          right: 'calc(100% + 8px)',
          transform: 'translateY(-50%)',
        };
      case 'right':
        return {
          top: '50%',
          left: 'calc(100% + 8px)',
          transform: 'translateY(-50%)',
        };
      default:
        return {};
    }
  };

  return (
    <div
      style={{ position: 'relative', display: 'inline-block', zIndex: 1 }} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && (
        <div
          style={{
            position: 'absolute',
            backgroundColor,
            color,
            padding: '8px',
            borderRadius: '4px',
            fontSize: '14px',
            whiteSpace: 'nowrap',
            zIndex: 99999, 
            ...getTooltipStyle(),
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
