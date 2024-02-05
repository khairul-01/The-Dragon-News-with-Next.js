import Link from 'next/link';
import Button from '@mui/material/Button';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <h1>404 !! Page Not Found!!! </h1>
            <Link href="/">
                <Button >
                    Back Home
                </Button>
            </Link>
        </div>

    );
};

export default NotFoundPage;