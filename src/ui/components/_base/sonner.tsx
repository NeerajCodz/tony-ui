import { Toaster as Sonner } from 'sonner';

export type SonnerBaseProps = React.ComponentProps<typeof Sonner>;

const SonnerBase = ({ ...props }: SonnerBaseProps) => {
  return <Sonner {...props} />;
};

export { SonnerBase };
