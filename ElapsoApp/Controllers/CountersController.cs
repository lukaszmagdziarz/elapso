using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using System.Web;
using System.Web.Mvc;
using ElapsoApp.Models;

namespace ElapsoApp.Controllers
{
    public class CountersController : Controller
    {
        private ElapsoContext db = new ElapsoContext();

        // GET: Counters
        public async Task<ActionResult> Index()
        {
            return View(await db.CounterSet.ToListAsync());
        }

        // GET: Counters/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Counter counter = await db.CounterSet.FindAsync(id);
            if (counter == null)
            {
                return HttpNotFound();
            }
            return View(counter);
        }

        // GET: Counters/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Counters/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "Id,Title,Description,Date,CreatedBy,CreationDate")] Counter counter)
        {
            if (ModelState.IsValid)
            {
                db.CounterSet.Add(counter);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            return View(counter);
        }

        // GET: Counters/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Counter counter = await db.CounterSet.FindAsync(id);
            if (counter == null)
            {
                return HttpNotFound();
            }
            return View(counter);
        }

        // POST: Counters/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "Id,Title,Description,Date,CreatedBy,CreationDate")] Counter counter)
        {
            if (ModelState.IsValid)
            {
                db.Entry(counter).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(counter);
        }

        // GET: Counters/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Counter counter = await db.CounterSet.FindAsync(id);
            if (counter == null)
            {
                return HttpNotFound();
            }
            return View(counter);
        }

        // POST: Counters/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            Counter counter = await db.CounterSet.FindAsync(id);
            db.CounterSet.Remove(counter);
            await db.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
