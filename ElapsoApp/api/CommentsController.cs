using ElapsoApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ElapsoApp.api
{
    public class CommentsController : ApiController
    {
        private ElapsoContext db = new ElapsoContext();

        // GET api/<controller>
        public IEnumerable<Comment> Get(int counterId)
        {
            var comments = db.Comments.Where(c => c.CounterId==counterId);
            return comments.ToList();
        }

        // PUT api/<controller>
        public void Put([FromBody] Comment comment)
        {
            db.Comments.Add(comment);
            db.SaveChanges();
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
            Comment comment = db.Comments.Find(id);
            db.Comments.Remove(comment);
            db.SaveChanges();
        }
    }
}