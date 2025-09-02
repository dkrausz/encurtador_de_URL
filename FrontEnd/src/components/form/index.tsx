import { useForm, type SubmitHandler } from "react-hook-form";
import { formSchema, type Tform } from "../../schema/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "../InputField";
import { useRef, useState } from "react";
import { shortenApi } from "../../services/api";
import { toast } from "react-toastify";

export function FormShortenUrl() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [shortUrl, setShortUrl] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Tform>({ resolver: zodResolver(formSchema) });

  const onSubmit: SubmitHandler<Tform> = async (data) => {
    console.log(data);
    let apiData;
    try {
      apiData = await shortenApi.post("/", data);
    } catch (error) {
      console.log(error);

      toast.error(`Algo deu errado!! ${error}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    toast.success("Url criada!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    setShortUrl(apiData?.data.shortUrl);
  };

  const handleCopyToClipboard = (): void => {
    if (inputRef.current) {
      navigator.clipboard.writeText(inputRef.current.value);

      toast.info("Url Copiada!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <form className="bg-stone-600 w-6/12 h-80 p-8 flex flex-col gap-6 rounded-md max-w-3xl" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-neutral-300 text-3xl text-center">Encurtador de Url</h2>
      <div className="flex w-full">
        <div className="flex flex-col justify-between w-full gap-6 px-6 ">
          <InputField label="Digite sua Url" inputId="longUrl" error={errors.longUrl} placeholder="Digite a Url" type="text" {...register("longUrl")} />
          <InputField label="Digite seu email" inputId="email" error={errors.email} placeholder="Digite seu email" type="email" {...register("email")} />
        </div>
        <button className="bg-blue-800 text-neutral-300 p-2 rounded-md w-20" type="submit">
          Encurtar
        </button>
      </div>
      <div className="flex w-full">
        <div className="flex flex-col justify-between w-full gap-6 px-6">
          <InputField label="Url encurtada" inputId="shortUrl" placeholder="Url encurtada" type="text" value={shortUrl} readOnly ref={inputRef} />
        </div>
        <button className="bg-blue-800 text-neutral-300 p-2 rounded-md w-20" type="button" onClick={handleCopyToClipboard}>
          Copiar!
        </button>
      </div>
    </form>
  );
}
