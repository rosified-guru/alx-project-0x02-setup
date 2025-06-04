export interface CardProps {
    title: string;
    content: string;
}
export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { title: string; content: string }) => void;
}
 export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  children: React.ReactNode;
 }
 export interface PostCardProps {
    title: string;
    content: string;
    userId: number;
 }
 export interface UserProps {
    id: number;
    name: string;
    email: string;
    phone: number;
    address: {
      street: string;
       city: string;
       zipcode: string;
    }
 }