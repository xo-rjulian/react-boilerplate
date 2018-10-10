import React from 'react';
import { Card } from 'semantic-ui-react';

interface ICardProps {
  title: string;
  description: string;
  centered: boolean;
  fluid: boolean;
  meta?: { className: string; text: string };
}

const BasicCard: React.SFC<ICardProps> = ({
  title,
  description,
  centered,
  fluid,
  meta,
  children,
}) => {
  return (
    <Card fluid={fluid} centered={centered}>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content>{children}</Card.Content>
    </Card>
  );
};

export default BasicCard;
