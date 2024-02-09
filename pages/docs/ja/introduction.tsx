import MdFile from "./md/introduction.md";
import DocsBase from '../../../src/components/base';
import MetaData from '../../../src/components/head'
const DocsIndex = () => {
  return (
    <>
      <MetaData title="IntroDuction - Documetation | React Speaker Board" />
      <DocsBase mdData={MdFile}/>
    </>
  )
}

export default DocsIndex
