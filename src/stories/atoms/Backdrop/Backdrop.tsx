import { joinClassNames } from '../../../utils/styles';
import './backdrop.css';

interface BackdropProps {
  /**
   * Required property to indicate which action should be launched when clicking
   */
  onOutsideClick: () => void;
  /**
   * Optional classNames
   */
  extraClassName?: string;
}

export function Backdrop({
  onOutsideClick,
  extraClassName,
}: BackdropProps): React.ReactNode {
  return (
    <div
      aria-hidden="true"
      onClick={onOutsideClick}
      className={joinClassNames({
        classNames: ['backdrop', extraClassName],
      })}
    />
  );
}
