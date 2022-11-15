import React, { ChangeEvent, useCallback, useState } from "react";
import { Button, Dimmer, Form, Header, Loader, Segment } from "semantic-ui-react";
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import useAsyncCallback from "../hooks/useAsyncCallback";
import * as api from "../services/api";
import { EventCreateRequest } from "../types/api";
import FormField from "../components/FormField";
import "./AddEventPage.scss";

enum RequestState {
  COMPLETE = "COMPLETE",
  FAILED = "FAILED"
}

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  date: yup.date().required().nullable().transform((curr, orig) => orig === '' ? null : curr),
});

export default function AddEventPage() {
  const [requestState, setRequestState] = useState<RequestState | null>(null);
  const [data, setData] = useState<EventCreateRequest>({
    firstName: "",
    lastName: "",
    email: "",
    date: "",
  });
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  const [onSubmit, loading] = useAsyncCallback(async () => {
    try {
      await api.createEvent(data);
      setRequestState(RequestState.COMPLETE);
      toast.success("Event created successfully");
    } catch(e: any) {
      setRequestState(RequestState.FAILED);
      toast.error(e.message);
    }
  }, [data]);

  let requestSegment;
  
  if(requestState) {
    requestSegment = (
      <Segment>
        <Header as="h2" textAlign="center">
          Last request state: {requestState}
        </Header>
      </Segment>
    );
  }

  return (
    <div className="AddEventPage">
      <div className="content">
        <Segment>
          <Dimmer active={loading} inverted>
            <Loader size="big" />
          </Dimmer>
          <Header as="h2" textAlign="center">
            Add an event
          </Header>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormField name="firstName" label="First name" onChange={onChange} errors={errors} register={register} required />
            <FormField name="lastName" label="Last name" onChange={onChange} errors={errors} register={register} required />
            <FormField name="email" label="Email" onChange={onChange} errors={errors} register={register} required />
            <FormField name="date" label="Event date" onChange={onChange} errors={errors} register={register} type="date" required />
            <Button
              fluid
              type="submit"
              content="Submit"
              size="large"
              color="black" />
          </Form>
        </Segment>
        {requestSegment}
      </div>
    </div>
  );
}
