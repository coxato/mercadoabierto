import React, { useState } from 'react';
import mediaRequests from '../../requests/media';
import { useProductCreation } from '../../store/product';
import { Icon } from 'semantic-ui-react';

const PhotoDelete = ({deleteCallback, imageFile}) => {

    const [productState] = useProductCreation();

    const [error, setError] = useState(null);
    const [deleting, setDeleting] = useState(false);

    const handleDelete = async () => {
        const photoFullName = `${productState.id_album}-${imageFile.name}`;

        mediaRequests.deleteFile({
            fileUrl: `products/${photoFullName}`,
            successCallback: deleteCallback,
            errorCallback: setError
        })
    }

    return (
        <div className="container" onClick={handleDelete}>
            <Icon name="delete" size="huge" color="red" />
        </div>
    );
}
 
export default PhotoDelete;