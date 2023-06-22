import Banner from "../../Shared/Banner/Banner";

const Blog = () => {
  return (
    <div>
      <Banner title={"Blogs"}></Banner>

      <h1 className="text-center text-3xl font-bold mt-20 mb-5">All Blog's</h1>

<div className="card grid grid-cols-1 md:grid-cols-2 gap-5 bg-base-100  mb-20">
  <div className="card-body shadow-xl">
    <h2 className="card-title">
    What is an access token and refresh token? How do they work and where should we store them on the client-side?  
    </h2>
    <p className="space-y-4"> <span>
    The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.
    </span>
      <br />
    <span> A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times.
</span>
      <br />
     <span> The client needs to store the refresh token safely. A malicious attacker gets access to the refresh and access token and uses it to request protected data to the resource server.</span>
    </p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">JWT</div> 
    </div>
  </div>
  
  <div className="card-body shadow-xl">
    <h2 className="card-title">
    Compare SQL and NoSQL databases?
    </h2>
    <p className="space-y-4"> <span>
    SQL databases use a structured query language and have a defined schema.SQL databases scale vertically,SQL databases are table-based
    </span>
      <br />
    <span> NoSQL databases use dynamic schemas for unstructured data,NoSQL databases scale horizontally,NoSQL databases are document, key-value, graph, or wide-column stores.
</span>
    
    </p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Database</div> 
    </div>
  </div>
  
   <div className="card-body shadow-xl">
    <h2 className="card-title">
    What is express js? What is Nest JS?
    </h2>
    <p className="space-y-4"> <span>
   Express js is Fast, unopinionated, minimalist web framework for Node.js.  Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. 
    </span>
      <br />
    <span>Nest. js is Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js.
    NestJS is a progressive Node. js framework that helps build server-side applications.
</span>
    
    </p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Node. js</div> 
    </div>
  </div>
  
  
  
 <div className="card-body shadow-xl">
    <h2 className="card-title">
    What is MongoDB aggregate and how does it work
    </h2>
    <p className="space-y-4"> <span>
    Aggregations emphasize low number of results for large numbers of entries, find is just regular SELECT.
    Aggregations operations process data records and return computed results. Aggregation operations group values from multiple documents together, 
    </span>
    
    </p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Mongo DB</div> 
    </div>
  </div>
</div>
    </div>
  );
};

export default Blog;