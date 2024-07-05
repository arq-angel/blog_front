import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Pagination = ({ meta, onPageChange }) => {
    // Helper function to create pagination links
    const createPaginationLinks = () => {
        const paginationLinks = [];

        for (let i = 1; i <= meta.lastPage; i++) {
            paginationLinks.push({
                label: i.toString(),
                active: meta.currentPage === i
            });
        }

        return paginationLinks;
    };

    const paginationLinks = createPaginationLinks();

    return (
        <nav className="text-center mt-4 mb-3">
            <Link
                to={`?page=${meta.currentPage - 1}`}
                onClick={() => onPageChange(meta.currentPage - 1)}
                className={`inline-block py-2 px-3 rounded-lg text-black text-xs hover:bg-gray-950 hover:cursor-pointer hover:text-white ${meta.currentPage === 1 ? 'disabled' : ''}`}
            >&laquo; Previous</Link>
            {paginationLinks.map((link) => (
                <Link
                    key={link.label}
                    to={`?page=${link.label}`}
                    onClick={() => onPageChange(parseInt(link.label, 10))}
                    className={`inline-block py-2 px-3 rounded-lg text-black text-xs ${link.active ? 'bg-gray-950 text-white' : ''} hover:bg-gray-950 hover:cursor-pointer hover:text-white`}
                >
                    {link.label}
                </Link>
            ))}
            <Link
                to={`?page=${meta.currentPage + 1}`}
                onClick={() => onPageChange(meta.currentPage + 1)}
                className={`inline-block py-2 px-3 rounded-lg text-black text-xs hover:bg-gray-950 hover:cursor-pointer hover:text-white ${meta.currentPage === meta.lastPage ? 'disabled' : ''}`}
            >Next &raquo;</Link>
        </nav>
    );
};


export default Pagination;
