import React from 'react'
import { StyledEntryCard } from './styles/EntryCard.styled'

function EntryCard ({children}) {
  return (
    <StyledEntryCard>
        {children}
    </StyledEntryCard>
  );
}

export default EntryCard;