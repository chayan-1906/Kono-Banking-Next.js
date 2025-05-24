export interface CustomAuthButtonProps {
    isLoading: boolean;
    type?: 'submit' | 'reset' | 'button';
    className?: string
    text: string;
}

export interface CustomLinkProps {
    href: string;
    text: string;
    className?: string;
}
