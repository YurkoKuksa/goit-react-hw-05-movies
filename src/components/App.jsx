import React, { useEffect, useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { getPhotos } from '../api/gallery';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { toast } from 'react-toastify';

import { MainContainer, NoPictures } from './App.styled';

export const App = () => {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [currentImage, setCurrentImage] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    setIsLoading(true);

    getPhotos(query, page)
      .then(({ hits: results, totalHits: total }) => {
        if (!results.length) {
          setIsEmpty(true);
          return;
        }

        setPhotos(prevState => [...prevState, ...results]);
        setIsLoadMore(page < Math.ceil(total / 12));

        toast.info('Pictures were found!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        console.log('Updated photos:', results);
      })
      .finally(() => setIsLoading(false));
  }, [page, query]);

  const handleSubmit = search => {
    setQuery(search);
    setPage(1);
    setPhotos([]);
  };

  const hadleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const handleOpenModal = currentImage => {
    setIsOpen(true);
    setCurrentImage(currentImage);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setCurrentImage({});
  };

  return (
    <MainContainer $hasPhotos={photos.length || isEmpty > 0}>
      <Searchbar onSubmit={handleSubmit} /> {isLoading && <Loader />}
      {photos.length > 0 && (
        <ImageGallery photos={photos} openModal={handleOpenModal} />
      )}
      {isEmpty && <NoPictures>There are no pictures for your query</NoPictures>}
      {isLoadMore && !isEmpty && (
        <Button type="button" onClick={hadleLoadMore} />
      )}
      {isOpen && (
        <Modal close={handleCloseModal}>
          <img src={currentImage.src} alt={currentImage.alt} width="70%" />
        </Modal>
      )}
    </MainContainer>
  );
};

export default App;
