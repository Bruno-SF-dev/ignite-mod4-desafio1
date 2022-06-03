import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedImage, setSelectedImage] = useState('');

  function handleViewImage(url: string) {
    setSelectedImage(url);
    onOpen();
  }

  return (
    <>
      {!!cards.length && (
        <SimpleGrid spacing="40px" columns={3}>
          {cards.map(card => (
            <Card data={card} key={card.id} viewImage={handleViewImage} />
          ))}
        </SimpleGrid>
      )}

      <ModalViewImage
        isOpen={isOpen}
        onClose={onClose}
        imgUrl={selectedImage}
      />
    </>
  );
}
