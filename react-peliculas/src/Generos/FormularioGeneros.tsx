import { Formik, Form, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../Utils/Button";
import FormGroupText from "../Utils/FormGroupText";
import * as Yup from "yup";
import { generacionCreacionDTO } from "./generos.d.model";

export default function FormularioGeneros(props: formularioGenerosProps) {
  return (
    <Formik
      initialValues={props.modelo}

      onSubmit={props.onSubmit}
    
      validationSchema={Yup.object({
        nombre: Yup.string()
          .required("Este campo es requerido")
          .primeraLetraMayuscula(),
      })}
    >
      {(formikProps) => (
        <Form>
          <FormGroupText campo="nombre" label="Nombre" />

          <Button disabled={formikProps.isSubmitting} type="submit">
            Salvar
          </Button>
          <Link className="btn btn-secondary" to="/generos">
            Cancelar
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface formularioGenerosProps{
    modelo: generacionCreacionDTO;
    onSubmit(valores: generacionCreacionDTO, accion: FormikHelpers<generacionCreacionDTO>): void;
}
