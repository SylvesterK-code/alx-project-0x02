
//card
export interface CardProps {
  title: string;
  content: string;
}


// Make PostModal Reusable. add/edit post
// We'll extend the PostModal component to:
// Accept optional initialData
// Display different button and title for Add vs Edit
// Notify the parent whether it's an update or a new post
export interface Post {
  title: string;
  content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: Post, index?: number) => void;
  initialData?: Post;
  editIndex?: number;
}





