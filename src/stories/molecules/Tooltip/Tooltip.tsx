import { useState } from 'react';
import { getSizeClassName, joinClassNames } from '../../../utils/styles';
import './tooltip.css';
import { Button } from '../../atoms/Button/Button';

interface TooltipProps {
  /**
   * Required property to indicate the content of the component
   */
  children: string | JSX.Element;
  /**
   * Required property to indicate the content of the tooltip
   */
  content: JSX.Element | React.ReactNode;
  /**
   * Optional property to indicate the initial state (displayed or hidden)
   */
  initialState?: boolean;
  /**
   * Optional property to indicate if open / hide on click or hovering
   */
  actionOnClick?: boolean;
  /**
   * Optional property to indicate classNames
   */
  extraClassName?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
}

export function Tooltip({
  children,
  content,
  initialState,
  actionOnClick,
  extraClassName,
  size = 'medium',
}: TooltipProps): React.ReactNode {
  // States
  const [show, setShow] = useState(initialState ?? false);

  // Constants
  const sizeClassName = getSizeClassName({ size, baseName: 'tooltip' });
  const xSizeClassName = getSizeClassName({ size, baseName: 'tooltip_x' });

  const ySizeClassName = getSizeClassName({ size, baseName: 'tooltip_y' });

  // Handlers
  const openCloseOnClick = () => {
    if (actionOnClick) setShow((prevState) => !prevState);
  };

  const openOnMouseEnter = () => {
    if (!actionOnClick) setShow(true);
  };

  const closeOnMouseLeave = () => {
    if (!actionOnClick) setShow(false);
  };

  return (
    <span
      className={joinClassNames({
        classNames: ['tooltip', 'tooltip_layout'],
      })}
    >
      <div>
        <button
          className="trigger"
          type="button"
          onClick={openCloseOnClick}
          onMouseEnter={openOnMouseEnter}
          onMouseLeave={closeOnMouseLeave}
        >
          {children}
        </button>
      </div>
      {show && (
        <span
          aria-hidden={!show}
          role="tooltip"
          className={joinClassNames({
            classNames: [
              'tooltip_layout',
              'tooltip_content',
              ySizeClassName,
              sizeClassName,
            ],
          })}
        >
          <span
            className={joinClassNames({
              classNames: ['tooltip_layout', 'tooltip_child', extraClassName],
            })}
          >
            {actionOnClick && (
              <div className="tooltip_child_button">
                <Button
                  type="button"
                  onClick={openCloseOnClick}
                  extraClassName={joinClassNames({
                    classNames: ['tooltip_button', xSizeClassName],
                  })}
                >
                  X
                </Button>
              </div>
            )}
            {content}
          </span>
          <span
            className={joinClassNames({
              classNames: ['tooltip_layout', 'tooltip_content_triangle'],
            })}
          ></span>
        </span>
      )}
    </span>
  );
}
