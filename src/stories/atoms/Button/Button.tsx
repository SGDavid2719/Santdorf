import { joinClassNames } from '../../../utils/styles';
import './button.css';

export type BtnType =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'warning';

export interface DefaultButton extends ButtonProps {
  /**
   * Button type to display
   */
  btnType?: BtnType;
}

export interface ButtonProps {
  /**
   * Button contents
   */
  children?: string | React.JSX.Element;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional classNames
   */
  extraClassName?: string;
  /**
   * Optional styles
   */
  style?: React.CSSProperties;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optional mouse enter handler
   */
  onMouseEnter?: () => void;
  /**
   * Optional mouse leave handler
   */
  onMouseLeave?: () => void;
  /**
   * Optional property to indicate the type of the button
   */
  type?: 'button' | 'reset' | 'submit';
  /**
   * Optional property to indicate the role of the button
   */
  role?: string;
  /**
   * Optional property to indicate whether a control expands or contracts, and whether or not controlled elements are shown or hidden
   */
  ariaExpanded?: boolean;
  /**
   * Optional property to indicate whether the element is checked, unchecked, or undetermined. Used in Toggle
   */
  ariaChecked?: boolean;
  /**
   * Optional property to indicate the current "pressed" state of a toggle button
   */
  ariaPressed?: boolean;
  /**
   * Optional property to indicate visible content in an accessible way. Used for icon-only buttons
   */
  ariaLabel?: string;
  /**
   * Optional property to disable the button
   */
  disabled?: boolean;
}

export function Button({
  children,
  size = 'medium',
  extraClassName = '',
  type = 'button',
  role = 'button',
  ariaExpanded = false,
  ariaLabel,
  ariaChecked,
  ariaPressed = undefined,
  disabled = false,
  btnType = 'default',
  ...props
}: DefaultButton): React.ReactNode {
  return (
    <button
      type={type}
      role={role}
      aria-label={ariaLabel}
      aria-expanded={role !== 'switch' ? ariaExpanded : undefined}
      aria-pressed={ariaPressed}
      aria-checked={ariaChecked}
      disabled={disabled}
      className={joinClassNames({
        classNames: ['btn', btnType, size, extraClassName],
      })}
      {...props}
    >
      {children}
    </button>
  );
}

export function PrimaryButton(props: Readonly<ButtonProps>): React.ReactNode {
  return <Button btnType="primary" {...props} />;
}

export function SecondaryButton(props: Readonly<ButtonProps>): React.ReactNode {
  return <Button btnType="secondary" {...props} />;
}

export function DangerButton(props: Readonly<ButtonProps>): React.ReactNode {
  return <Button btnType="danger" {...props} />;
}

export function WarningButton(props: Readonly<ButtonProps>): React.ReactNode {
  return <Button btnType="warning" {...props} />;
}
