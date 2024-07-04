import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Pagination = ({ meta, links, onPageChange }) => {
    // Helper function to create pagination links
    const createPaginationLinks = () => {
        const paginationLinks = [];

        if (links.first) {
            paginationLinks.push({ url: links.first, label: 'First', active: false });
        }

        if (links.prev) {
            paginationLinks.push({ url: links.prev, label: 'Previous', active: false });
        }

        for (let i = 1; i <= meta.lastPage; i++) {
            paginationLinks.push({
                url: `http://blog-back.cc/api/homepage/posts?page=${i}`,
                label: i.toString(),
                active: meta.currentPage === i
            });
        }

        if (links.next) {
            paginationLinks.push({ url: links.next, label: 'Next', active: false });
        }

        if (links.last) {
            paginationLinks.push({ url: links.last, label: 'Last', active: false });
        }

        return paginationLinks;
    };

    const paginationLinks = createPaginationLinks();

    return (
        <nav className="text-center mt-4 mb-3">
            {paginationLinks.map((link) => (
                <button
                    key={link.label}
                    onClick={() => onPageChange(link.page)}
                    //disabled={!link.page}
                    className={
                        `inline-block py-2 px-3 rounded-lg text-black text-xs ${
                            link.active ? 'bg-gray-950 text-white' : ''
                        } hover:bg-gray-950 hover:text-white ${
                            !link.page ? 'cursor' : ''
                        }`
                    }
                    dangerouslySetInnerHTML={{ __html: link.label }}
                />
            ))}
        </nav>
    );
};

Pagination.propTypes = {
    meta: PropTypes.shape({
        currentPage: PropTypes.number.isRequired,
        lastPage: PropTypes.number.isRequired,
        perPage: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        from: PropTypes.number.isRequired,
        to: PropTypes.number.isRequired
    }).isRequired,
    links: PropTypes.shape({
        first: PropTypes.string,
        last: PropTypes.string,
        prev: PropTypes.string,
        next: PropTypes.string
    }).isRequired
};

export default Pagination;
