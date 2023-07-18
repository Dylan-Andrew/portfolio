import React from 'react';
import { FullpageSection } from '@ap.cx/react-fullpage';

export default function About() {
  return (
    <FullpageSection id="about">
        <div className="flex flex-col lg:flex-row items-center justify-center relative h-full w-full">
            <div className="w-full lg:w-1/4 flex justify-center">
                <img
                    src="/images/Dylan_Andrew.png"
                    alt=""
                    className="w-3/4 h-auto rounded-full"/>
            </div>
            <div className="w-full lg:w-3/4 p-4">
                <h2 className="text-2xl font-bold">Résumé</h2>
                <p className="mb-4">
                    Ici, vous pouvez ajouter votre résumé, vos informations personnelles,
                    vos compétences, ou toute autre information pertinente.
                </p>
                <a
                href="/pdf/CVDylanAndrew.pdf"
                download="CV-Dylan_Andrew.pdf"
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                Télécharger mon CV
                </a>
            </div>
        </div>
    </FullpageSection>
  );
}
