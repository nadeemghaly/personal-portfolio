import { ReactNode, ButtonHTMLAttributes, forwardRef } from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  as?: React.ElementType;
  to?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  as: Component = 'button',
  ...props
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-sky-400 to-blue-600 text-white hover:from-sky-500 hover:to-blue-700 hover:shadow-lg hover:scale-[1.02] focus:ring-blue-500',
    secondary: 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 focus:ring-gray-500',
    outline: 'border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 focus:ring-gray-500',
    ghost: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-500'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

  return (
    <Component ref={ref} className={classes} {...props}>
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
    </Component>
  );
});
