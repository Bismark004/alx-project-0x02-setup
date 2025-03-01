export interface CardProps {
    title: string;
    body: string;
}

export interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (title: string, content: string) => void;
}

export interface ButtonProps {
    size: "small" | "medium" | "large";
    shape: "rounded-sm" | "rounded-md" | "rounded-full";
    onClick?: () => void;
    children: React.ReactNode;
}



export interface PostProps {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

  export interface UserProps {
    name: string;
    email: string;
    address: {
      street: string;
      city: string;
      zipcode: string;
    };
  }
  
  
  