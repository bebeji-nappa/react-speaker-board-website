import MdFile from "./md/components.md";
import DocsBase from '../../../src/components/base';
import MetaData from '../../../src/components/head'

const Components = () => {
  return (
    <>
      <MetaData title="Components - Documetation | React Speaker Board" />
      <DocsBase mdData={MdFile}/>
    </>
  )
}

export default Components
