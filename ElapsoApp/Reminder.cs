//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ElapsoApp
{
    using System;
    using System.Collections.Generic;
    
    public partial class Reminder : ElapsoBaseClass
    {
        public int CounterId { get; set; }
    
        public virtual Counter Counter { get; set; }
    }
}
