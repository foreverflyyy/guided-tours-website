import React from 'react';
import {ExcursionsList} from "./excursions-list";
import {Kinds} from "./kinds";

export const ExcursionsPage = () => {
  return (
    <div>
      <Kinds/>
      <ExcursionsList/>
    </div>
  );
};
