import React from "react";
import { FullpageSection } from '@ap.cx/react-fullpage';
import { Card, Input, Button, Typography, Textarea } from "@material-tailwind/react";

export default function Contact() {
  return (
    <FullpageSection className="bg-[url(../public/images/Contact.jpg)] bg-cover">
      <div className="flex items-center justify-center relative h-full w-full bg-black/75">
        <Card color="transparent" shadow={true}>
          <div className="text-center">
            <Typography variant="h2" color="white">
              Contactez-moi
            </Typography>
          </div>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <Input size="lg" color="indigo" label="Name" className="message"/>
              <Input size="lg" color="indigo" label="Email" className="message"/>
              <Textarea color="indigo" label="Message" className="message"/>
            </div>
            <Button color="red" variant="outlined" className="flex m-auto rounded-full mt-6">
              Envoyer
            </Button>
          </form>
        </Card>
      </div>
    </FullpageSection>
  );
}